"""Anthropic Messages format through Ezkielyna API (the same endpoint Claude Code uses). Base URL has no /v1."""
import os

import anthropic
from dotenv import load_dotenv

load_dotenv()
client = anthropic.Anthropic(base_url="https://api.ezkielyna.store", api_key=os.environ["EZKIELYNA_API_KEY"])
model = os.getenv("EZKIELYNA_MODEL", "deepseek-v4.1-flash")

msg = client.messages.create(
    model=model,
    max_tokens=300,
    messages=[{"role": "user", "content": "Give me three tips for writing clear commit messages."}],
)
print("".join(block.text for block in msg.content if block.type == "text"))
