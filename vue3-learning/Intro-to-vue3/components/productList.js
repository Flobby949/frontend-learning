app.component('product-list', {
    props: {
        products: {
            type: Array,
            required: true
        }
    },
    template: `
        <div class="flex-column">
            <div class="flex justify-between border p-4 m-2 normal-round link" 
                v-for="(product, index) in products" :key="index" @click="changeDetail(index)">
                <div class="text-white">{{product.name}}</div>
            </div>
        </div>
    `,
    methods: {
        changeDetail(index) {
            this.$emit('change-detail', index)
        }
    },
})