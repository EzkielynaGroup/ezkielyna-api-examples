# Google Sheets (Apps Script custom function)

[`Code.gs`](Code.gs) adds `=EZK()` to a spreadsheet.

## Setup
1. Open the sheet → **Extensions → Apps Script**, replace the editor content with `Code.gs`, save.
2. **Project Settings (gear) → Script properties → Add script property**: `EZKIELYNA_API_KEY` = your key (`sk-...`).
   Keep the key there, not in a cell: anyone who can view the sheet can read cells.
3. Back in the sheet:

| Formula | What it does |
|---|---|
| `=EZK("Write a tagline for a coffee shop")` | one answer |
| `=EZK(A2, "Summarise in 10 words:")` | instruction + cell |
| `=EZK(A2:A20, "Translate to English:")` | one answer per row, requests in parallel |
| `=EZK(A2, "Classify as positive/negative:", "glm-5.3")` | another model from [the model list](https://ezkielyna.store/models) |

## Limits and cost
- A custom function must finish within **30 seconds**, so keep ranges to a few dozen rows per formula (the rows run in parallel) and answers short (`EZK_MAX_TOKENS`).
- Answers are cached for 6 hours (`CacheService`), so a recalculation does not bill the same prompt twice. Change the instruction to force a new answer.
- Sheets can recalculate formulas on its own. For one-off bulk jobs, copy the results and **Paste special → Values only** so they stop calling the API.
- Every call shows up under **Log** at api.ezkielyna.store with its tokens and cost.

Docs checked (11 Nov 2026): [Custom functions](https://developers.google.com/apps-script/guides/sheets/functions), [UrlFetchApp](https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app), [PropertiesService](https://developers.google.com/apps-script/reference/properties/properties-service), [CacheService](https://developers.google.com/apps-script/reference/cache/cache).

**Bahasa Indonesia:** [ezkielyna.store/panduan/google-apps-script](https://ezkielyna.store/panduan/google-apps-script)
