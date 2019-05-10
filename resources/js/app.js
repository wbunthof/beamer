
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('./jquery.easy-ticker');

window.Vue = require('vue');
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('productComponent2', require('./components/productComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('product', {
    template: `<div class="product">

            <div class="product-image">
                <img :src="image">
            </div>

            <div class="product-info">
                <h1>{{ title }}</h1>

                <p v-if="inStock" >In stock</p>
                <p v-else style="text-decoration: line-through">Out of stock</p>

                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <div    v-for="(variant, index) in variants"
                        :key="variant.variantId"
                        class="color-box"
                        :style="{ backgroundColor: variant.variantColor}"
                        @mouseover="updateProduct(index)">
                </div>

                <button @click="addToCart"
                        :disabled="!inStock"
                        :class="{disabledButton: !inStock}">Add to Cart</button>
                <button @click="removeFromCart"
                        :disabled="cart < 1"
                        :class="{disabledButton: cart < 1}">Remove</button>

                <div class="cart">
                    <p>Cart({{ cart }})</p>
                </div>

            </div>

        </div>`,
    data() {
        return { product: 'Basic Socks',
            brand: 'Wondersocks',
            onSale: true,
            description: 'Here is an awesome description',
            details: ["80% katoen", "20% polyester", "Unisex"],
            selectedVariant: 0,
            variants: [
            {
                variantId: 2234,
                variantColor: 'white',
                variantImage: 'https://images.unsplash.com/photo-1554139897-afbea21ce34a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                variantQuantity: 100,
            },
            {
                variantId: 2235,
                variantColor: '#6574cd',
                variantImage: 'https://images.unsplash.com/photo-1550238310-07b61612e756?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                variantQuantity: 0,

            }
        ],
            sizes: [
            38,
            39,
            40,
        ],
            cart: 0,
        }
    },
    methods:{
        addToCart() {
            this.cart += 1;
        },
        removeFromCart() {
            if (this.cart > 0){
                this.cart -=1

            }
        },
        updateProduct(index) {
            this.selectedVariant = index;
        }
    },
    computed:{
        title() {
            if (this.onSale === true) {
                return this.brand + ' - ' + this.product + ' is on SALE!';
            }
            return this.brand + ' - ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity;
        },
    }
});



const app = new Vue({
    el: '#main'});

$('.ticker1, .ticker2').easyTicker({
    direction: 'down',
    easing: 'swing',
    speed: 'slow',
    interval: 3000,
    height: '100%',
    visible: 2,
    mousePause: 0,
    controls: {
        up: '',
        down: '',
        toggle: '',
        playText: '',
        stopText: ''
    }
});

// setInterval(function(){
//     location.reload();
// }, 3000);


