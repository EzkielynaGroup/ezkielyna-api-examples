# Ezkielyna API examples

Copy-paste examples for **[Ezkielyna API](https://api.ezkielyna.store)**: one API key for 100+ AI models (DeepSeek, GLM, Kimi, Qwen, MiniMax, Claude, GPT, Gemini, image and video models) through endpoints compatible with OpenAI and Anthropic. Top up with QRIS (any Indonesian bank or e-wallet), USDT or Binance Pay, starting at $0.5.

> 🇮🇩 Bahasa Indonesia: lihat [bagian di bawah](#bahasa-indonesia).

| | |
|---|---|
| OpenAI-compatible base URL | `https://api.ezkielyna.store/v1` |
| Anthropic-compatible base URL (Claude Code, Anthropic SDK) | `https://api.ezkielyna.store` (no `/v1`) |
| Model list + live prices | [ezkielyna.store/models](https://ezkielyna.store/models) |
| Status | [api.ezkielyna.store/status](https://api.ezkielyna.store/status) |
| Setup guides (Cursor, Cline, n8n, …) | [ezkielyna.store/panduan](https://ezkielyna.store/panduan) |

## 1. Get a key
1. Buy API Credit at [ezkielyna.store/api-credit](https://ezkielyna.store/api-credit). You get a redeem code on the order page.
2. Sign in at [api.ezkielyna.store](https://api.ezkielyna.store), redeem the code under **Wallet**, then create a key under **API Keys**.
3. Pick the key group:
   - **Auto**: Standard, Premium, Hemat and Media models. The easiest default.
   - **Standard**: text models at the listed rate. No Claude, GPT, image or video.

Copy `.env.example` to `.env` and paste your key. Never commit `.env`.

## 2. Run an example
| Folder | What it shows |
|---|---|
| [`curl/`](curl) | chat, streaming and model list with plain `curl` |
| [`python/`](python) | `openai` Python SDK: chat, streaming, model list; `anthropic` SDK through the Anthropic endpoint |
| [`node/`](node) | `openai` npm package: chat and streaming |
| [`claude-code/`](claude-code) | `~/.claude/settings.json` to run Claude Code on Ezkielyna API |

```bash
# curl
export EZKIELYNA_API_KEY="sk-..."
bash curl/chat.sh

# Python
pip install -r python/requirements.txt
python python/chat.py

# Node.js 18+
cd node && npm install && node chat.mjs
```

The default model in every example is `deepseek-v4.1-flash` (Standard group). Set `EZKIELYNA_MODEL` to try any other model from [the model list](https://ezkielyna.store/models).

## Costs and logs
Every request is billed per token from your balance and listed under **Log** at api.ezkielyna.store with the model, the input, cached and output tokens, and the cost. The balance does not expire. Monthly cost estimate: [ezkielyna.store/hitung-hemat](https://ezkielyna.store/hitung-hemat).

## Common errors
| Error | Fix |
|---|---|
| `401` / `403` | Wrong or truncated key, or the balance is empty. |
| `404` | Wrong base URL. Use `/v1` for the OpenAI format; no `/v1` for Anthropic / Claude Code. |
| `model not found` / `no available channel` | Model name typo, or your key group does not include that model (e.g. Claude with a Standard key). |

---

## Bahasa Indonesia
Contoh kode siap pakai untuk Ezkielyna API: satu API key untuk 100+ model AI, kompatibel dengan OpenAI dan Anthropic, saldo dibayar QRIS (DANA, GoPay, OVO, ShopeePay, m-banking) mulai $0.5.

1. Beli API Credit di [ezkielyna.store/api-credit](https://ezkielyna.store/api-credit). Panduan bayar: [bayar API AI pakai DANA/GoPay](https://ezkielyna.store/panduan/bayar-api-ai-qris-dana-gopay).
2. Tukarkan kode redeem di menu **Wallet** api.ezkielyna.store, lalu buat key di **API Keys** (grup **Auto** paling mudah).
3. Salin `.env.example` menjadi `.env`, isi key, lalu jalankan salah satu contoh di atas.

Harga live per 1 juta token dalam Rupiah: [ezkielyna.store/harga-api-ai](https://ezkielyna.store/harga-api-ai). Panduan Claude Code dengan saldo QRIS: [ezkielyna.store/panduan/claude-code-murah-qris](https://ezkielyna.store/panduan/claude-code-murah-qris).

## License
MIT. Ezkielyna is an independent API gateway and is not affiliated with the model vendors.
