from sqlmodel import SQLModel


class TaskCreate(SQLModel):
    name: str
