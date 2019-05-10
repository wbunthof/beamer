<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Vue tutorial</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">


</head>
<body>
    <div id="main">
        <div class="nav-bar">

        </div>

        <product
            :premium="premium"
            v-bind:details="['80% katoen', '20% polyester', 'Unisex']"
            product="Basic Socks"
            brand="Wondersocks"
            :cart="cart"
            @update-cart="updateCart">
        </product>

        <div class="cart">
            <p>Cart(@{{ cart.length }})</p>
        </div>

        <product-review></product-review>
    </div>

    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
