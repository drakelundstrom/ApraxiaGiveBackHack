from typing import Any, Dict, List, Optional
from langchain.callbacks import AsyncIteratorCallbackHandler
from langchain.callbacks.manager import (
    AsyncCallbackManagerForChainRun,
    CallbackManagerForChainRun,
)
from langchain.llms.openai import OpenAI

# from langchain.llms.anthropic import Anthropic
from langchain.prompts import PromptTemplate
from langchain.chains.base import Chain
from langchain.output_parsers import CommaSeparatedListOutputParser
from pydantic import Extra
from langchain.prompts.base import BasePromptTemplate
from langchain.schema.language_model import BaseLanguageModel

output_parser = CommaSeparatedListOutputParser()
format_instructions = """
output should be formatted as a JSON list of objects with the keys 'number' and 'name'.
ex. [{"number": 1, "name":"do_thing_1"},{"number": 1, "name":"do_thing_2"}]
"""

create_task_prompt = PromptTemplate(
    template="""
    You are an executive assistant for neurodivergent people.
    Ensure all instructions are written at an 8th grade reading level.
    Please create a list of simple steps to accomplish the task {task}
    {format_instructions}
  """,
    input_variables=["task"],
    partial_variables={"format_instructions": format_instructions},
)

callback = AsyncIteratorCallbackHandler()
model = OpenAI(streaming=True, verbose=True, callbacks=[callback], temperature=0.1)


class CreateTaskChain(Chain):
    prompt: BasePromptTemplate = create_task_prompt
    llm: BaseLanguageModel = model
    output_key: str = "task"  #: :meta private:
    output_parser = output_parser

    class Config:
        """Configuration for this pydantic object."""

        extra = Extra.forbid
        arbitrary_types_allowed = True

    @property
    def input_keys(self) -> List[str]:
        """Will be whatever keys the prompt expects.

        :meta private:
        """
        return self.prompt.input_variables

    @property
    def output_keys(self) -> List[str]:
        """Will always return text key.

        :meta private:
        """
        return [self.output_key]

    def _call(
        self,
        inputs: Dict[str, Any],
        run_manager: Optional[CallbackManagerForChainRun] = None,
    ) -> Dict[str, str]:
        prompt_value = self.prompt.format_prompt(**inputs)
        response = self.llm.generate_prompt(
            [prompt_value], callbacks=run_manager.get_child() if run_manager else None
        )
        if run_manager:
            run_manager.on_text("Log something about this run")

        return {self.output_key: response.generations[0][0].text}

    async def _acall(
        self,
        inputs: Dict[str, Any],
        run_manager: Optional[AsyncCallbackManagerForChainRun] = None,
    ) -> Dict[str, str]:
        # Your custom chain logic goes here
        # This is just an example that mimics LLMChain
        prompt_value = self.prompt.format_prompt(**inputs)

        # Whenever you call a language model, or another chain, you should pass
        # a callback manager to it. This allows the inner run to be tracked by
        # any callbacks that are registered on the outer run.
        # You can always obtain a callback manager for this by calling
        # `run_manager.get_child()` as shown below.
        response = await self.llm.agenerate_prompt(
            [prompt_value], callbacks=run_manager.get_child() if run_manager else None
        )

        # If you want to log something about this run, you can do so by calling
        # methods on the `run_manager`, as shown below. This will trigger any
        # callbacks that are registered for that event.
        if run_manager:
            await run_manager.on_text("Log something about this run")

        return {self.output_key: response.generations[0][0].text}

    @property
    def _chain_type(self) -> str:
        return "Create_Task_Chain"
