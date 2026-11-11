<?php
// Chat completion with plain PHP + cURL (PHP 7.4+, ext-curl). Run: EZKIELYNA_API_KEY=sk-... php chat.php
$key = getenv('EZKIELYNA_API_KEY') ?: exit("Set EZKIELYNA_API_KEY first\n");
$model = getenv('EZKIELYNA_MODEL') ?: 'deepseek-v4.1-flash';

$ch = curl_init('https://api.ezkielyna.store/v1/chat/completions');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CONNECTTIMEOUT => 10,
    CURLOPT_TIMEOUT => 120,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $key,
        'Content-Type: application/json',
    ],
    CURLOPT_POSTFIELDS => json_encode([
        'model' => $model,
        'max_tokens' => 500,
        'messages' => [
            ['role' => 'system', 'content' => 'You are a concise assistant.'],
            ['role' => 'user', 'content' => 'Explain what an API gateway is in two sentences.'],
        ],
    ]),
]);
$body = curl_exec($ch);
$status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
if ($body === false) {
    exit('Network error: ' . curl_error($ch) . "\n");
}
curl_close($ch);

$data = json_decode($body, true);
if ($status !== 200) {
    exit("HTTP $status: " . ($data['error']['message'] ?? $body) . "\n");
}
echo $data['choices'][0]['message']['content'], "\n";
printf("\n[%s] tokens: in=%d out=%d\n", $model, $data['usage']['prompt_tokens'], $data['usage']['completion_tokens']);
