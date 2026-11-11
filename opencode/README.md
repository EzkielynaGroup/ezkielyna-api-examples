# OpenCode

[`opencode.json`](opencode.json) adds Ezkielyna as a custom OpenAI-compatible provider.

1. Put the key in your environment (or your shell profile):
   ```bash
   export EZKIELYNA_API_KEY="sk-..."
   ```
2. Copy `opencode.json` to your project root, or merge it into `~/.config/opencode/opencode.json` for every project.
3. Run `opencode`, then pick a model with `/models` (it starts on `ezkielyna/deepseek-v4.1-flash`).

Notes:
- The base URL **includes** `/v1`.
- OpenCode does not fetch the model list: add every model you want under `models`, with the id exactly as on [the model list](https://ezkielyna.store/models). Claude and GPT need a key in the **Auto** or **Premium** group.
- `{env:EZKIELYNA_API_KEY}` becomes an empty string when the variable is not set, which shows up as a `401`.
- The `limit` values tell OpenCode when to compact the conversation. Smaller numbers keep each request (and its cost) smaller.
- The file uses the V1 config format, which OpenCode V2 still reads. The native V2 form is:
  ```jsonc
  "providers": {
    "ezkielyna": {
      "name": "Ezkielyna",
      "env": ["EZKIELYNA_API_KEY"],
      "package": "@opencode/ai/providers/openai-compatible",
      "settings": { "baseURL": "https://api.ezkielyna.store/v1", "apiKey": "{env:EZKIELYNA_API_KEY}" },
      "models": { "deepseek-v4.1-flash": { "name": "DeepSeek V4.1 Flash" } }
    }
  }
  ```
  Keep one provider entirely in one format. With the V2 background server, set the key there too: `opencode service set env EZKIELYNA_API_KEY sk-...`.

Docs checked (11 Nov 2026): [opencode.ai/docs/providers](https://opencode.ai/docs/providers/), [opencode.ai/docs/config](https://opencode.ai/docs/config/), [V1 → V2 migration](https://opencode.ai/docs/migrate-v1.md).

**Bahasa Indonesia:** [ezkielyna.store/panduan/opencode](https://ezkielyna.store/panduan/opencode)
