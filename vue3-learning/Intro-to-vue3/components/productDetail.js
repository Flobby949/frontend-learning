app.component('product-detail', {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    template: `
        <div class="shadow p-4 card bg-grey ml-5 normal-round text-white">
            <h1>{{item.name}}</h1>
            <div class="my-3 align-center justify-center">
              <img :src="item.image" style="border-radius: 8px;width:150px"/>
            </div>
            <div class="flex-column flex-4 m-2">
            <ul class="px-5 py-3">
                <li v-for="detail in item.details">
                    {{detail}}
                </li>
            </ul>
            </div>
            <div>{{item.des}}</div>
            <div class="p-2 flex flex-column">
                <h3>size</h3>
                <div class="flex flex-row">
                    <div class="m-2"  v-for="size in item.sizes">
                        <input type="radio" :name="item.name">
                        <span class="m-2">{{size}}</span>
                    </div>
                </div>
            </div>
        </div>
    `,
})