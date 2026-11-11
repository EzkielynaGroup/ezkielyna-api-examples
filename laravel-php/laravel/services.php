<?php
// Add this entry to the array returned by config/services.php
// and put EZKIELYNA_API_KEY=sk-... in .env (never commit .env).

return [
    // ...existing services...

    'ezkielyna' => [
        'key' => env('EZKIELYNA_API_KEY'),
        'base_url' => env('EZKIELYNA_BASE_URL', 'https://api.ezkielyna.store/v1'),
        'model' => env('EZKIELYNA_MODEL', 'deepseek-v4.1-flash'),
    ],
];
