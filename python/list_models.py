"""List the models your key can use (depends on the key group: Auto, Standard, Premium, Media, ...)."""
import os

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
client = OpenAI(base_url="https://api.ezkielyna.store/v1", api_key=os.environ["EZKIELYNA_API_KEY"])
ids = sorted(m.id for m in client.models.list())
print(f"{len(ids)} models")
for model_id in ids:
    print(" ", model_id)
