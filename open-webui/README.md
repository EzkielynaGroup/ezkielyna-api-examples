# Open WebUI and LibreChat

## Open WebUI
Admin Panel → Settings → Connections → OpenAI API → add a connection with URL `https://api.ezkielyna.store/v1` and your key. Or start it with environment variables:

```bash
docker run -d -p 3000:8080 \
  -e OPENAI_API_BASE_URL=https://api.ezkielyna.store/v1 \
  -e OPENAI_API_KEY=sk-... \
  -v open-webui:/app/backend/data \
  --name open-webui ghcr.io/open-webui/open-webui:main
```

The model picker is filled from `/v1/models` with your key, so a Standard key does not list Premium models.

## LibreChat
Put the key in `.env` (`EZK_API_KEY=sk-...`) and add a custom endpoint to `librechat.yaml`: see [`librechat.yaml`](librechat.yaml). Restart LibreChat.

Tip: automatic chat titles cost one extra request each; use a flash model as `titleModel`.

**Bahasa Indonesia:** [ezkielyna.store/panduan/open-webui-librechat](https://ezkielyna.store/panduan/open-webui-librechat)
