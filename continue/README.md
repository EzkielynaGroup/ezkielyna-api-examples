# Continue (VS Code / JetBrains)

1. Put the key in `~/.continue/.env`:
   ```
   EZKIELYNA_API_KEY=sk-...
   ```
2. Copy [`config.yaml`](config.yaml) to `~/.continue/config.yaml` (or merge its `models` list into yours).
3. Reload the IDE window and pick **DeepSeek V4.1 Flash (Ezkielyna)** in the Continue model menu.

Notes:
- `provider: openai` with `apiBase` set works for any OpenAI-compatible API. `apiBase` **includes** `/v1`.
- `${{ secrets.X }}` is read from `.env` in the project root, `<project>/.continue/.env`, then `~/.continue/.env`. The IDE extensions do not see variables exported in your shell.
- `name`, `version` and `schema` at the top are required.
- Autocomplete sends a request on almost every pause in typing. If you add a model with the `autocomplete` role, use a fast, low-cost model and watch the **Log** at api.ezkielyna.store.

Docs checked (11 Nov 2026): [config.yaml reference](https://docs.continue.dev/reference), [OpenAI provider](https://docs.continue.dev/customize/model-providers/top-level/openai), [configuration](https://docs.continue.dev/customize/deep-dives/configuration).

**Bahasa Indonesia:** [ezkielyna.store/panduan/continue](https://ezkielyna.store/panduan/continue)
