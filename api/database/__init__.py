from api.controllers import *
from sqlmodel import SQLModel, create_engine, Session
import os

uri = os.environ.get(
    "DATABASE_URL",
    f"sqlite:///{os.path.join(os.path.dirname(__file__), 'dev.sqlite3')}",
)
connect_args = {"check_same_thread": False} if uri[:6] == "sqlite" else {}

engine = create_engine(uri, connect_args=connect_args)

SQLModel.metadata.create_all(engine)


def get_db():
    with Session(engine) as db:
        yield db
