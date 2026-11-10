#!/usr/bin/env bash
# Chat completion, streaming and model list with curl. Needs EZKIELYNA_API_KEY in the environment.
set -euo pipefail
: "${EZKIELYNA_API_KEY:?set EZKIELYNA_API_KEY first}"
BASE="https://api.ezkielyna.store/v1"
MODEL="${EZKIELYNA_MODEL:-deepseek-v4.1-flash}"

echo "== chat"
curl -sS "$BASE/chat/completions" \
  -H "Authorization: Bearer $EZKIELYNA_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{\"model\":\"$MODEL\",\"messages\":[{\"role\":\"user\",\"content\":\"Say hello in Indonesian, one short sentence.\"}]}"
echo

echo "== streaming"
curl -sS -N "$BASE/chat/completions" \
  -H "Authorization: Bearer $EZKIELYNA_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{\"model\":\"$MODEL\",\"stream\":true,\"messages\":[{\"role\":\"user\",\"content\":\"Count from 1 to 5.\"}]}"
echo

echo "== models available to this key"
curl -sS "$BASE/models" -H "Authorization: Bearer $EZKIELYNA_API_KEY" | head -c 600
echo
