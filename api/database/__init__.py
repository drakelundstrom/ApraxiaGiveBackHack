from api.controllers import *
from sqlmodel import SQLModel, create_engine, Session
import os

uri = os.environ.get(
    "DATABASE_URL",
    f"sqlite:///{os.path.join(os.path.dirname(__file__), 'dev.sqlite3')}",
)
engine = create_engine(uri)

SQLModel.metadata.create_all(engine)


def get_db():
    with Session(engine) as db:
        yield db
