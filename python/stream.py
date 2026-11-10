"""Streaming chat with the OpenAI Python SDK: prints tokens as they arrive."""
import os

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
client = OpenAI(base_url="https://api.ezkielyna.store/v1", api_key=os.environ["EZKIELYNA_API_KEY"])
model = os.getenv("EZKIELYNA_MODEL", "deepseek-v4.1-flash")

stream = client.chat.completions.create(
    model=model,
    stream=True,
    messages=[{"role": "user", "content": "Write a haiku about Jakarta rain."}],
)
for chunk in stream:
    if chunk.choices and chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="", flush=True)
print()
