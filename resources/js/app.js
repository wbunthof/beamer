
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
    props: {
        brand: {
            type: String,
            required: true,
        },
        product: {
            type: String,
            required: true
        },
        premium: {
            type: Boolean,
            required: true
        },
        details: {
            type: Array,
            required: false
        },
        cart: {
            type: Array,
            required: true
        }
    },
    template: `
        <div class="product">
            <div class="product-image">
                <img :src="image">
            </div>

            <div class="product-info">
                <h1>{{ title }}</h1>

                <p v-if="inStock" >In stock</p>
                <p v-else style="text-decoration: line-through">Out of stock</p>
                <p>Shipping: {{ shipping}}</p>

                <productdetails :details="details"></productdetails>

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
                        :disabled="!cart.includes(this.id)"
                        :class="{disabledButton: !cart.includes(this.id)}">Remove</button>
                        
                
            </div>
        </div>`,
    data() {
        return {
            onSale: true,
            description: 'Here is an awesome description',
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
                variantQuantity: 20,

            }
        ],
            sizes: [
            38,
            39,
            40,
        ],
        }
    },
    methods:{
        addToCart() {
            this.$emit('update-cart', {amount:1, id:this.id});
        },
        removeFromCart() {
            this.$emit('update-cart', {amount:-1, id:this.id});
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
        id() {
            return this.variants[this.selectedVariant].variantId;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity;
        },
        shipping() {
            if (this.premium) {
                return 'free';
            }
            return '€2,99'
        }
    }
});

Vue.component('productdetails',{
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template: `
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
    `
    });

Vue.component('product-review', {
    template: `
    <form class="review-form" @submit.prevent="onSubmit">
      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name" placeholder="Name">
      </p>
      
      <p>
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review" placeholder="Your wonderful review"></textarea>
      </p>
      
      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>
          
      <p>
        <input type="submit" value="Submit">  
      </p>    
    
    </form>`,
    data() {
        return {
            name: null,
            review: null,
            rating: null
        }
    },
    methods: {
        onSubmit() {
            let productReview = {
                name: this.name,
                review: this. review,
                rating: this.rating
            };

            this.name = null;
            this.review = null;
            this.rating = null;
        }
    }
})

const app = new Vue({
    el: '#main',
    data: {
        premium: false,
        cart: [],

    },
    methods: {
        updateCart(amountId) {
            console.log(amountId);
            if (amountId['amount'] > 0) {
                this.cart.push(amountId['id']);

            } else if (amountId['amount'] < 0 && this.cart.length > 0) {
                console.log(this.cart.splice(this.cart.indexOf(amountId['id']), 1));
            }
        }
    }
});

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


