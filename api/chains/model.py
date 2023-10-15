from langchain.llms.openai import OpenAI
from langchain.chat_models import ChatOpenAI
from langchain.callbacks import AsyncIteratorCallbackHandler

# from langchain.llms.anthropic import Anthropic

callback = AsyncIteratorCallbackHandler()
# model = OpenAI(streaming=True, verbose=True, callbacks=[callback], temperature=0.1)
model = ChatOpenAI(streaming=True, verbose=True, temperature=0.1)
