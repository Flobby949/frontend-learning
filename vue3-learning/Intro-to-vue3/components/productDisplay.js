app.component('product-display', {
    props: {
        isfree: {
            type: Boolean,
            required: true
        }
    },
    template: `
                    <div>{{ msg }}</div>
                    <div class="product-container">
                        <div class="product-image"  :class="[ inStock ? '' : 'out-of-stock-img' ]">
                            <img :src="image" :alt="product">
                        </div>
                        <div class="product-info">
                            <h1>{{ product }}</h1>
                            <p>{{ description }}</p>
                            <div v-if="inStock">In Stock</div>
                            <div v-else>Out of Stock</div>
                            <ul>
                                <li v-for="(item, index) in details" :key="index">
                                    {{item}}
                                </li>
                            </ul>
                            <h2>COLOR</h2>
                            <div v-for="(variant, index) in variants" :key="variant.id" 
                                @click="updateImage(index)" 
                                class="color-circle"
                                :style="{ backgroundColor: variant.color }">
                            </div>
                            <h2>SIZE</h2>
                            <div v-for="(item, index) in sizes" :key="index">
                                {{ item }}
                            </div>
                            <button class="button"
                                :class="{disabledButton: !inStock}"
                                :disabled="!inStock" 
                                @click="addToCart">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    `,
    data() {
        return {
            product: 'Socks',
            description: 'A warm fuzzy pair of socks.',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [{
                    id: 2234,
                    color: 'green',
                    image: './asserts/images/socks_green.jpg',
                    quantity: 50
                },
                {
                    id: 2235,
                    color: 'blue',
                    image: './asserts/images/socks_blue.jpg',
                    quantity: 0
                }
            ],
            sizes: ['s', 'm', 'l', 'xl'],
            cart: 0,
            currentProduct: 0
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-cart')
        },
        updateImage(index) {
            this.currentProduct = index
        }
    },
    computed: {
        inStock() {
            return this.variants[this.currentProduct].quantity > 0
        },
        image() {
            return this.variants[this.currentProduct].image
        },
        msg() {
            return this.isfree ? '免费' : '99.99￥'
        }
    }
})