# Claude Code on Ezkielyna API

Copy `settings.json` to `~/.claude/settings.json` (Windows: `%USERPROFILE%\.claude\settings.json`) and replace `sk-...` with your key.

- The base URL has **no** `/v1`: Claude Code adds `/v1/messages` itself.
- The three `ANTHROPIC_DEFAULT_*` variables also cover the small model Claude Code uses for background tasks. With a Standard key they must point to a Standard model.
- To use Claude models, create the key in the **Auto** or **Premium** group and put the Claude model name from [ezkielyna.store/models](https://ezkielyna.store/models).

One-command setup (asks for the key with hidden input and merges your config): see [ezkielyna.store/panduan/setup](https://ezkielyna.store/panduan/setup). Full guide in Indonesian: [ezkielyna.store/panduan/claude-code-murah-qris](https://ezkielyna.store/panduan/claude-code-murah-qris).
