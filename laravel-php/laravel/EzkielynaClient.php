<?php
// app/Services/EzkielynaClient.php — small wrapper around Laravel's HTTP client (Laravel 10+).

namespace App\Services;

use Illuminate\Support\Facades\Http;

class EzkielynaClient
{
    /**
     * @param  array<int, array{role: string, content: string}>  $messages
     */
    public function chat(array $messages, ?string $model = null, int $maxTokens = 800): string
    {
        $response = Http::withToken(config('services.ezkielyna.key'))
            ->acceptJson()
            ->connectTimeout(10)
            ->timeout(120)                       // the default 30 s is too short for long answers
            ->retry(2, 1000, throw: false)       // retry network blips; 4xx/5xx handled below
            ->post(rtrim(config('services.ezkielyna.base_url'), '/') . '/chat/completions', [
                'model' => $model ?? config('services.ezkielyna.model'),
                'messages' => $messages,
                'max_tokens' => $maxTokens,
            ]);

        $response->throw();                      // RequestException on 401/402/429/5xx

        return (string) $response->json('choices.0.message.content', '');
    }
}
