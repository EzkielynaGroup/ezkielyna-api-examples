# Dify

Dify 1.x connects to OpenAI-compatible APIs through the **OpenAI-API-compatible** model plugin.

1. **Settings → Model Provider** → install **OpenAI-API-compatible** from the Marketplace (by langgenius).
2. On that provider click **Add Model** and fill in:

| Field | Value |
|---|---|
| Model Type | `LLM` |
| Model Name | `deepseek-v4.1-flash` (exactly as on [the model list](https://ezkielyna.store/models)) |
| API Key | your Ezkielyna key (`sk-...`) |
| API Base URL | `https://api.ezkielyna.store/v1` |
| Completion mode | `Chat` |
| Model context size | `128000` |
| Upper bound for max tokens | `8192` |
| Function Call Type | `Tool Call` (needed for Agent apps and tools) |
| Vision Support | `Support` for models that read images (e.g. `deepseek-v4.1-flash`), otherwise `No Support` |
| Stream function calling | `Support` |

3. Save, then pick the model in your app (Chatflow, Agent, Workflow LLM node).

Notes:
- For LLMs the API Base URL **includes** `/v1`; do not add `/chat/completions`.
- The plugin does not fetch the model list: add each model separately. Claude and GPT need a key in the **Auto** or **Premium** group.
- The defaults for context size and max tokens are 4096; raise them or long chats get cut.
- Workflows that loop over many items call the model once per item. Watch the **Log** at api.ezkielyna.store while testing.

Docs checked (11 Nov 2026): [OpenAI-API-compatible plugin (langgenius/dify-official-plugins)](https://github.com/langgenius/dify-official-plugins/tree/main/models/openai_api_compatible), [Dify docs](https://docs.dify.ai/).
