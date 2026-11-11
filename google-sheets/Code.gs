/**
 * Ezkielyna API in Google Sheets: =EZK("prompt") and =EZK(A2:A20, "Translate to English:")
 * Setup: Extensions > Apps Script > paste this file > Project Settings > Script properties >
 *        add EZKIELYNA_API_KEY = sk-...   (never put the key in a cell or in this code)
 */
const EZK_URL = 'https://api.ezkielyna.store/v1/chat/completions';
const EZK_DEFAULT_MODEL = 'deepseek-v4.1-flash';
const EZK_MAX_TOKENS = 300;          // keeps each cell short and cheap
const EZK_CACHE_SECONDS = 21600;     // 6 h (the maximum): recalculating a sheet does not pay twice

/**
 * Ask an AI model. Works on one cell or a whole column (requests run in parallel).
 *
 * @param {string|Array<Array<string>>} input Text, a cell, or a range such as A2:A20.
 * @param {string} [instruction] Optional instruction put before each input, e.g. "Summarise in 10 words:".
 * @param {string} [model] Optional model id from ezkielyna.store/models (default deepseek-v4.1-flash).
 * @return The answer (or a column of answers).
 * @customfunction
 */
function EZK(input, instruction, model) {
  const rows = Array.isArray(input) ? input.map(r => r[0]) : [input];
  // empty cells stay empty (no request)
  const prompts = rows.map(v => (v === '' || v == null) ? '' : (instruction ? instruction + '\n\n' : '') + String(v));
  const answers = ezkAskMany_(prompts, model || EZK_DEFAULT_MODEL);
  return Array.isArray(input) ? answers.map(a => [a]) : answers[0];
}

function ezkAskMany_(prompts, model) {
  const key = PropertiesService.getScriptProperties().getProperty('EZKIELYNA_API_KEY');
  if (!key) return prompts.map(() => 'Set the script property EZKIELYNA_API_KEY first');
  const cache = CacheService.getScriptCache();
  const out = new Array(prompts.length);
  const todo = [];
  prompts.forEach((p, i) => {
    if (!p.trim()) { out[i] = ''; return; }
    const ck = ezkCacheKey_(model, p);
    const hit = cache.get(ck);
    if (hit !== null) out[i] = hit; else todo.push({ i, p, ck });
  });
  if (todo.length) {
    // fetchAll runs the requests in parallel: custom functions must finish within 30 seconds.
    const responses = UrlFetchApp.fetchAll(todo.map(t => ({
      url: EZK_URL,
      method: 'post',
      contentType: 'application/json',
      headers: { Authorization: 'Bearer ' + key },
      payload: JSON.stringify({ model, max_tokens: EZK_MAX_TOKENS, messages: [{ role: 'user', content: t.p }] }),
      muteHttpExceptions: true,
    })));
    responses.forEach((res, k) => {
      const t = todo[k];
      const code = res.getResponseCode();
      if (code !== 200) { out[t.i] = 'Error ' + code + ': ' + res.getContentText().slice(0, 150); return; }
      const text = (JSON.parse(res.getContentText()).choices[0].message.content || '').trim();
      out[t.i] = text;
      if (text.length < 90000) cache.put(t.ck, text, EZK_CACHE_SECONDS);
    });
  }
  return out;
}

function ezkCacheKey_(model, prompt) {
  const digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, model + '\n' + prompt, Utilities.Charset.UTF_8);
  return 'ezk_' + Utilities.base64EncodeWebSafe(digest);
}
