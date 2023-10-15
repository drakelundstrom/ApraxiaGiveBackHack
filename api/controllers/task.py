from typing import List
from api.chains import CreateTaskChain
from api import app
from api.models import TaskRequest
from json import loads
from fastapi import Depends, HTTPException
from sqlmodel import Session, select
from api.database import get_db
from api.models import Step, Task, TaskRead, TaskReadWithSteps


@app.post("/tasks/create")
async def create_task(
    task: TaskRequest, sess: Session = Depends(get_db)
) -> TaskReadWithSteps:
    chain = CreateTaskChain()
    result = None
    retries = 0
    while not result and retries < 5:
        try:
            result = loads(chain.run({"task": task.name}))
        except Exception as e:
            result = None
            retries += 1
            print(e)
    if result is None:
        raise HTTPException(
            400, "Model could not come up with steps, please try again."
        )
    task = Task(**task.dict())
    sess.add(task)
    sess.commit()
    id = task.id
    sess.add_all(
        [
            Step(number=i + 1, name=step["name"], task_id=id)
            for i, step in enumerate(result)
        ]
    )
    sess.commit()
    task = sess.exec(select(Task).where(Task.id == id)).first()
    return task


@app.get("/tasks/search")
async def search_tasks(name: str, sess: Session = Depends(get_db)) -> List[TaskRead]:
    search = "%{}%".format(name)
    tasks = sess.exec(select(Task).where(Task.name.ilike(search))).all()
    return tasks


@app.get("/task/{id}")
async def get_task_by_id(id: int, sess: Session = Depends(get_db)) -> TaskReadWithSteps:
    task = sess.exec(select(Task).where(Task.id == id)).first()
    return task
