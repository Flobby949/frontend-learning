const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'A warm fuzzy pair of socks.',
            image: './asserts/images/socks_blue.jpg',
            url: "https://cn.vuejs.org/",
            inStock: false,
            stock: 10,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './asserts/images/socks_blue.jpg' },
                { id: 2235, color: 'blue', image: './asserts/images/socks_green.jpg' }
            ],
            sizes: ['s', 'm', 'l', 'xl'],
            cart: 0
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeToCart() {
            this.cart -= 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }

    },
})