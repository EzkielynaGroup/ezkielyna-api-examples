# PHP and Laravel

## Plain PHP (cURL)
[`chat.php`](chat.php) needs only PHP 7.4+ with the cURL extension:

```bash
export EZKIELYNA_API_KEY="sk-..."
php laravel-php/chat.php
```

## Laravel HTTP client
1. Add the `ezkielyna` entry from [`laravel/services.php`](laravel/services.php) to `config/services.php`, and `EZKIELYNA_API_KEY=sk-...` to `.env`.
2. Copy [`laravel/EzkielynaClient.php`](laravel/EzkielynaClient.php) to `app/Services/`.
3. Inject it anywhere (controller, job, command). Example route: [`laravel/routes-example.php`](laravel/routes-example.php).

```php
$answer = app(\App\Services\EzkielynaClient::class)->chat([
    ['role' => 'user', 'content' => 'Halo!'],
]);
```

Notes:
- Read the key only through `config()`. After `php artisan config:cache`, `env()` outside config files returns null.
- Laravel's default timeout is 30 s; long answers need more (the client uses 120 s).
- `retry(..., throw: false)` still throws on connection errors; `->throw()` turns 4xx/5xx into a `RequestException`.
- For long jobs (summaries of many rows), call the client from a queued job, not inside the web request.
- The OpenAI PHP SDK (`openai-php/client`) also works: set the base URI to `api.ezkielyna.store/v1`.

Docs checked (11 Nov 2026): [Laravel HTTP client](https://laravel.com/docs/13.x/http-client), [Laravel configuration](https://laravel.com/docs/13.x/configuration), [PHP cURL](https://www.php.net/manual/en/book.curl.php).
