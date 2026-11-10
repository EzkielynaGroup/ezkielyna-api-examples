"""Chat completion with the OpenAI Python SDK pointed at Ezkielyna API."""
import os

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
client = OpenAI(base_url="https://api.ezkielyna.store/v1", api_key=os.environ["EZKIELYNA_API_KEY"])
model = os.getenv("EZKIELYNA_MODEL", "deepseek-v4.1-flash")

resp = client.chat.completions.create(
    model=model,
    messages=[
        {"role": "system", "content": "You are a concise assistant."},
        {"role": "user", "content": "Explain what an API gateway is in two sentences."},
    ],
)
print(resp.choices[0].message.content)
print(f"\n[{model}] tokens: in={resp.usage.prompt_tokens} out={resp.usage.completion_tokens}")
