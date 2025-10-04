<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Ruta para mostrar el formulario de reservas
Route::get('/reservas', function () {
    return view('reservas');
})->name('reservas');

// Ruta para procesar el formulario de reservas (debes crear un controlador para esto)
Route::post('/reservas/guardar', [App\Http\Controllers\ReservaController::class, 'store'])->name('reservas.guardar');

// Ruta para login 
Route::get('/admin/login', function () {
    return view('admin.login');
})->name('admin.login');

Route::post('/admin/login', [App\Http\Controllers\Admin\LoginController::class, 'authenticate'])->name('admin.login.submit');