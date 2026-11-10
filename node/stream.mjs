// Streaming chat with the openai npm package: prints tokens as they arrive. Node.js 18+.
import "dotenv/config";
import OpenAI from "openai";

const client = new OpenAI({ baseURL: "https://api.ezkielyna.store/v1", apiKey: process.env.EZKIELYNA_API_KEY });
const stream = await client.chat.completions.create({
  model: process.env.EZKIELYNA_MODEL || "deepseek-v4.1-flash",
  stream: true,
  messages: [{ role: "user", content: "Explain recursion to a 10-year-old in 3 sentences." }],
});
for await (const chunk of stream) process.stdout.write(chunk.choices[0]?.delta?.content || "");
process.stdout.write("\n");
