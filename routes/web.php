<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('/login', 'Api\Admin\PassportController@login');
Route::post('/logout', 'Auth\LoginController@logout');



Route::get('/admin/{vue?}', function(){
    return view('layouts.admin');
});
Route::get('/{vue?}', function(){
    return view('layouts.app');
})->where('vue', '^(?!.*api).*$[\/\w\.-]*');
Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', 'HomeController@index')->name('home');
