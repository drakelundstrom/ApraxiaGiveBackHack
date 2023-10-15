from json import loads

from fastapi import HTTPException
from api import app
from api.chains import MakeDecisionChain
from api.models import Decision, DecisionResponse


@app.post("/decisions")
def make_decision(decision: Decision) -> DecisionResponse:
    chain = MakeDecisionChain()
    result = None
    retries = 0
    while not result and retries < 5:
        try:
            result = loads(chain.run(decision.dict()))
        except Exception as e:
            result = None
            retries += 1
            print(e)
    if result is None:
        raise HTTPException(
            400, "Model could not come up with steps, please try again."
        )
    return result
