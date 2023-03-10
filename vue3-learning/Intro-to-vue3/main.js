const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'A warm fuzzy pair of socks.',
            image: './asserts/images/socks_blue.jpg',
            url: "https://cn.vuejs.org/",
            inStock: true,
            onSale: true
        }
    }
})