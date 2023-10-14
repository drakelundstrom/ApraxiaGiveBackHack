from typing import List, Optional
from sqlmodel import Relationship, SQLModel, Field


class TaskRequest(SQLModel):
    name: str


class Task(TaskRequest, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    steps: List["Step"] = Relationship(back_populates="task")


class TaskRead(TaskRequest):
    id: int


class StepBase(SQLModel):
    number: int
    name: str


class StepWithTask(StepBase):
    task_id: int = Field(foreign_key="task.id")


class Step(StepWithTask, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    task: Task = Relationship(back_populates="steps")


class TaskReadWithSteps(TaskRead):
    steps: List[StepBase] = []
