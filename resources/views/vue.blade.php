<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Sponsoren Kringgildedag 2019</title>

    <!-- Styles -->
    <style>
        html,
        body,
        .grid-container {
            height: 100%;
            margin: 0;
            background-color: black;
        }

        .grid-container *:after {
            content: attr(class);
            position: absolute;
            top: 0;
            left: 0;
        }

        .grid-container {
            display: grid;
            grid-template-columns: 50% 50%;
            grid-template-rows: 10% 35% 55%;
        }

        * {
            height: 100%;
            font-family: Verdana, serif;
        }
    </style>
</head>
<body>

<div class="grid-container">
    <div style="grid-column: 1 / span 2; justify-self: center;">
        <h1 style="color: papayawhip; font-size: 300%">Het Heilig Kruis Gilde dankt alle sponsoren voor haar bijdrage!</h1>
    </div>

    <div style="justify-self: end">
        <img src="{{ asset('img/Logo 775 v2.png') }}"/>
    </div>

    <div><img src="{{ asset('img/Logo Bavaria.png') }}" /></div>

    <div style="grid-column: 1 / span 2; justify-self: center;">
        <iframe id="iframe"
                src="https://docs.google.com/presentation/d/e/2PACX-1vSbdCYEO6oj8b8jL3SOzW9t6mD93Py-EQMGdhKnlkcfGT_3JWT0FmjedH1306KKLDPMQZHgrZ5v1zbN/embed?start=true&loop=true&delayms=3000&rm=minimal"
{{--                Vergeet &rm=minimaal op het einde niet!!!--}}
                frameborder="0"
                width="1200"
                height="839"
                allowfullscreen="true"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                onload="afterIframeLoad();">

        </iframe>
    </div>
</div>

<script>
    setInterval(function () {
       location.reload();
    }, 10*60*1000);
</script>
</body>
</html>
