// Chat completion with the openai npm package pointed at Ezkielyna API. Node.js 18+.
import "dotenv/config";
import OpenAI from "openai";

const client = new OpenAI({ baseURL: "https://api.ezkielyna.store/v1", apiKey: process.env.EZKIELYNA_API_KEY });
const model = process.env.EZKIELYNA_MODEL || "deepseek-v4.1-flash";

const resp = await client.chat.completions.create({
  model,
  messages: [{ role: "user", content: "Suggest a name for a coffee shop in Bandung." }],
});
console.log(resp.choices[0].message.content);
console.log(`\n[${model}] tokens: in=${resp.usage?.prompt_tokens} out=${resp.usage?.completion_tokens}`);
