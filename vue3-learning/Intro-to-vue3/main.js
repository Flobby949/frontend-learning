const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'A warm fuzzy pair of socks.',
            image: './asserts/images/socks_blue.jpg',
            url: "https://cn.vuejs.org/",
            inStock: true,
            stock: 10,
            price: 50,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './asserts/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './asserts/images/socks_blue.jpg', quantity: 50 }
            ],
            sizes: ['s', 'm', 'l', 'xl'],
            cart: 0,
            firstName: '张',
            lastName: '三'
        }
    },
    computed: {
        fullName: {
            get() {
                return this.firstName + "-" + this.lastName
            },
            set(value) {
                [this.firstName, this.lastName] = value.split('-')
            }
        },
        bill() {
            return `${this.cart * this.price} $`
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