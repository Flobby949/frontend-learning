app.component('product-list', {
    props: {
        products: {
            type: Array,
            required: true
        }
    },
    template: `
        <div class="flex-column">
            <div class="flex p-2 m-3 normal-round link card border-black align-center"
                v-for="(product, index) in products" :key="index ">
                <div class="flex-1 shadow normal-round m-2">
                    <img :src="product.image" width="120" />
                </div>
                <div class="flex">
                    <div class="flex-column flex-4 m-2">
                        <h2>{{product.name}}</h2>
                        <ul class="px-5 py-3">
                            <li v-for="detail in product.details">
                                {{detail}}
                            </li>
                        </ul>
                    </div>
                    <div class="ellipsis p-3 mx-2 text-grey" style="width:170px">
                        {{product.des + product.des + product.des + product.des}}
                    </div>
                    <div class="p-2 mx-5">
                        <div class="flex-column m-2"  v-for="size in product.sizes">
                            <input type="radio" :name="product.name">
                            <span class="m-2">{{size}}</span>
                        </div>
                    </div>
                </div>
                <div class="flex-1 m-2">
                    <h2>{{product.price}} ￥</h2>
                    <button class="button" @click="changeDetail(index)">添加购物车</button>
                </div>
            </div>
        </div>
    `,
    methods: {
        changeDetail(index) {
            this.$emit('add-cart', index)
        }
    },
})