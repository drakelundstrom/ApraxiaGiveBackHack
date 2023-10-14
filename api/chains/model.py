from langchain.llms.openai import OpenAI
from langchain.callbacks import AsyncIteratorCallbackHandler

# from langchain.llms.anthropic import Anthropic

callback = AsyncIteratorCallbackHandler()
model = OpenAI(streaming=True, verbose=True, callbacks=[callback], temperature=0.1)
