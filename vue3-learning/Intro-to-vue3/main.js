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
                    details: ['50% cotton', '30% wool', '20% polyester'],
                    stock: 50,
                    sizes: ['s', 'm', 'l', 'xl'],
                    des: 'A warm fuzzy pair of socks.',
                    price: 10
                },
                {
                    name: '商品2',
                    image: './asserts/images/socks_green.jpg',
                    details: ['50% cotton', '30% wool', '20% polyester'],
                    stock: 50,
                    sizes: ['s', 'm', 'l', 'xl'],
                    des: 'A warm fuzzy pair of socks.',
                    price: 20
                },
                {
                    name: '商品3',
                    image: './asserts/images/socks_blue.jpg',
                    details: ['50% cotton', '30% wool', '20% polyester'],
                    stock: 50,
                    sizes: ['s', 'm', 'l', 'xl'],
                    des: 'A warm fuzzy pair of socks.',
                    price: 30
                }
            ],
            isList: false,
            bills: []
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
        total() {
            return this.bills.reduce((previous, current) => {
                return previous + current.price
            }, 0);
        }
    },
    methods: {
        addCart() {
            this.cart++
        },
        changeDetail(e) {
           this.currentItem = this.list[e]
        },
        add(e) {
            this.bills.splice(0,0,this.list[e])
        }
    },
})