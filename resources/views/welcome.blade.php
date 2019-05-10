@extends('layouts.app')

@section('content')
    <div class="container-fluid h100">
        <div class="grid30_70 h100">
            <div class="bg-danger h100">
                <div class="container">
                    <h1 class="title">Sponsoren:</h1>

                    <div class="ticker1">
                        <div id="ul">
                            @foreach($sponsors as $sponsor)
                                <h1>{{$sponsor->title}}</h1>
                                <img class="img" src="https://images.unsplash.com/photo-1497393007523-302c86e07c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
                            @endforeach
                        </div>
                    </div>

                </div>
            </div>



            <div class="bg-info h100">
                <div class="container">
                    <h1 class="title" id="ter">Info:</h1>

                    <div class="ticker2">
                        <div id="ul">
                            @foreach($articles as $article)
                                <h1>{{$article->title}}</h1>
                            @endforeach
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
@endsection
