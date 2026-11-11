<?php
// routes/web.php (or api.php): try it at /ai-test?q=Halo

use App\Services\EzkielynaClient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/ai-test', function (Request $request, EzkielynaClient $ai) {
    $answer = $ai->chat([
        ['role' => 'system', 'content' => 'Jawab singkat dalam bahasa Indonesia.'],
        ['role' => 'user', 'content' => $request->query('q', 'Apa itu API gateway?')],
    ]);

    return response()->json(['answer' => $answer]);
});
