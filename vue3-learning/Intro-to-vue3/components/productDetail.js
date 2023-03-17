app.component('product-detail', {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    template: `
        <div class="shadow p-2 card bg-blue normal-round text-white">
            <div>{{item.name}}</div>
            <img :src="item.image" style="width:130px"/>
            <div>{{item.price}}</div>
        </div>
    `,
})