from typing import List, Union
from sqlmodel import SQLModel
from pydantic import validator


class Decision(SQLModel):
    situation: str
    context: str
    options: Union[List[str], str]

    @validator("context")
    def validate_context(cls, v):
        if v != "":
            v = f"Taking this context into account: {v}"
        return v

    @validator("options")
    def validate_options(cls, v):
        if not v:
            return ""
        if isinstance(v, list):
            v = ", ".join(v)
        return f"Selecting ONLY from the following options: {v}"


class DecisionResponse(SQLModel):
    decision: str
    justificaion: List[str]
