<?php

use App\Http\Controllers\Auth\LoginController;

use Illuminate\Support\Facades\Route;



//Route::any('/{any}', function () {
//    return redirect('/login');
//})->where('any', '.*')->where('any', '^(?!login).*$');



Route::view('{any}', 'welcome')->where('any','.*')->name('any');

