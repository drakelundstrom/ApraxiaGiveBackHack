from api.chains import CreateTaskChain
from api import app
from api.models import TaskCreate


@app.post("/tasks/create")
def create_task(task: TaskCreate):
    chain = CreateTaskChain()
