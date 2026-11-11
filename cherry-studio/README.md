# Cherry Studio

1. **Settings (gear) → Model Provider → + Add**.
2. Provider Name: `Ezkielyna`, Provider Type: **OpenAI**. Turn the provider on.
3. Fill in:

| Field | Value |
|---|---|
| API Key | your Ezkielyna key (`sk-...`), then click **Check** |
| API Address | `https://api.ezkielyna.store` |

4. Click **Manage** to load the models available to your key and press **+** next to each one you want (for example `deepseek-v4.1-flash`, `glm-5.3`). Or **+ Add** and type the id from [the model list](https://ezkielyna.store/models).
5. Pick the model at the top of a chat.

Notes:
- Cherry Studio adds `/v1` when the address has no version path, so `https://api.ezkielyna.store` and `https://api.ezkielyna.store/v1` both work (checked against v2.2.0). Older docs describe a trailing `/` rule; v2 ignores it.
- To pin the full URL, end it with `#`: `https://api.ezkielyna.store/v1/chat/completions#`.
- **Manage** only lists models; nothing is added until you press **+**. A Standard key does not list Claude or GPT.

Docs checked (11 Nov 2026): [Cherry Studio provider settings](https://docs.cherry-ai.com/) (read from [CherryHQ/cherry-studio-docs](https://github.com/CherryHQ/cherry-studio-docs)), `formatApiHost` in [CherryHQ/cherry-studio v2.2.0](https://github.com/CherryHQ/cherry-studio).
