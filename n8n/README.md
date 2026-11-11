# n8n

Two ways to call Ezkielyna API from n8n.

## A. AI nodes (OpenAI Chat Model, AI Agent)
1. **Credentials → Add credential → OpenAI**
   - API Key: your Ezkielyna key (`sk-...`)
   - Base URL: `https://api.ezkielyna.store/v1`
2. In an **OpenAI Chat Model** or **AI Agent** node, pick that credential and type a model name from [the model list](https://ezkielyna.store/models), for example `deepseek-v4.1-flash`.

## B. HTTP Request node
Import [`workflow-http-request.json`](workflow-http-request.json) (**Workflows → Import from file**). It has a Manual Trigger, a Set node with `text`, and an HTTP Request node:

- `POST https://api.ezkielyna.store/v1/chat/completions`
- Auth: **Header Auth** credential named `Ezkielyna`, header `Authorization`, value `Bearer sk-...`
- Answer: `{{ $json.choices[0].message.content }}`

Keep the key in a credential, never as plain text inside a node.

**Bahasa Indonesia:** panduan lengkap di [ezkielyna.store/panduan/n8n](https://ezkielyna.store/panduan/n8n).
