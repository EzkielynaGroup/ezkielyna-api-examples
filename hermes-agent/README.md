# Hermes Agent (Nous Research)

## Option A: interactive
Run `hermes model`, choose **Custom endpoint (self-hosted / VLLM / etc.)** and enter:

| Prompt | Value |
|---|---|
| API base URL | `https://api.ezkielyna.store/v1` |
| API key | your Ezkielyna key (`sk-...`) |
| Model name | `deepseek-v4.1-flash` |

## Option B: config file
1. Add the key to `~/.hermes/.env`: `EZKIELYNA_API_KEY=sk-...`
2. Merge [`config.yaml`](config.yaml) into `~/.hermes/config.yaml`.
3. Switch models inside a chat with `/model custom:ezkielyna:glm-5.3` (any id from [the model list](https://ezkielyna.store/models)).

Shorter form without a named provider:

```yaml
model:
  default: deepseek-v4.1-flash
  provider: custom
  base_url: https://api.ezkielyna.store/v1
  key_env: EZKIELYNA_API_KEY
```

Notes:
- The base URL **includes** `/v1`.
- `OPENAI_BASE_URL` in `.env` does not apply to custom endpoints; use the config above. The old top-level `custom_providers:` list is legacy (`hermes update` migrates it).
- Hermes sets no output cap for custom endpoints. Agents resend the whole history on every step, so start a new session when you switch topics to keep input tokens down.
- Claude and GPT models need a key in the **Auto** or **Premium** group.

Docs checked (11 Nov 2026): [Custom & self-hosted LLM providers](https://hermes-agent.nousresearch.com/docs/integrations/providers), [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent).
