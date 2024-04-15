<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function welcome()
    {
        // Pass the products route to the frontend
        return Inertia::render('Welcome', [
            'productsRoute' => route('products'),
        ]);
    }
}