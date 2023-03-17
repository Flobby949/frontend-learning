const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            firstName: '张',
            lastName: '三',
            x: true,
            y: false,
            list: [
                {
                    name: '商品1',
                    image: './asserts/images/socks_blue.jpg',
                    price: '10￥'
                },
                {
                    name: '商品2',
                    image: './asserts/images/socks_green.jpg',
                    price: '20￥'
                },
                {
                    name: '商品3',
                    image: './asserts/images/socks_blue.jpg',
                    price: '30￥'
                }
            ],
            currentItem:{
                name: '商品1',
                image: './asserts/images/socks_blue.jpg',
                price: '10￥'
            }
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
        addCart() {
            this.cart++
        },
        changeDetail(e) {
           this.currentItem = this.list[e]
        }
    },
})