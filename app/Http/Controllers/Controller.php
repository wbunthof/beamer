<?php

namespace App\Http\Controllers;

use App\Article;
use App\Sponsor;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function index(){
        return view('welcome')
            ->with([
                'sponsors' => Sponsor::all(),
                'articles' => Article::all()
            ]);
    }

    public function vue() {
        return view('vue')->with([
            'sponsors' => Sponsor::all(),
            'articles' => Article::all()
        ]);
    }
}
