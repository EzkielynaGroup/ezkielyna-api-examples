# Chatbox

1. **Settings → Model Provider → Add** (bottom of the list), name it `Ezkielyna`.
2. API mode: **OpenAI API Compatible**, then fill in:

| Field | Value |
|---|---|
| API Key | your Ezkielyna key (`sk-...`) |
| API Host | `https://api.ezkielyna.store/v1` |
| API Path | leave empty |
| Model | `deepseek-v4.1-flash` (add more ids from [the model list](https://ezkielyna.store/models)) |

3. Save and click **Check**, then pick the model in a new chat.

Notes:
- With API Path empty, Chatbox calls `<host>/chat/completions` and adds `/v1` if the host lacks it. If you fill API Path yourself (e.g. `/chat/completions`), the host must already end in `/v1`.
- New models start with no capabilities ticked. Tick **Vision** for models that read images (e.g. `deepseek-v4.1-flash`) and **Tool use** if you use tools.
- Claude and GPT need a key in the **Auto** or **Premium** group.

Docs checked (11 Nov 2026): [Chatbox: model providers](https://docs.chatboxai.app/en/guides/providers), `normalizeOpenAIApiHostAndPath` in [chatboxai/chatbox](https://github.com/chatboxai/chatbox).
