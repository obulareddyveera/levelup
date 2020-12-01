<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('/admin')->group(function() {
    Route::get('/author', 'App\Http\Controllers\AuthorController@index')->name('index');
    Route::post('/author', 'App\Http\Controllers\AuthorController@create')->name('create');
});

Route::prefix('/metadata')->group(function() {
    Route::get('/category', 'App\Http\Controllers\CategoryController@index')->name('index');
});

Route::prefix('/blog')->group(function() {
    Route::get('/post', 'App\Http\Controllers\PostController@index')->name('index');
    Route::post('/post', 'App\Http\Controllers\PostController@create')->name('create');
    Route::PUT('/post/{id}', 'App\Http\Controllers\PostController@update')->name('update');
});
