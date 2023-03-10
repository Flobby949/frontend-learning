const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'A warm fuzzy pair of socks.',
            image: './asserts/images/socks_blue.jpg',
            url: "https://cn.vuejs.org/",
            inStock: true,
            stock: 10,
            // courses: [
            //     {
            //         name: '后端工程化开发',
            //         cover: 'https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/e81eb0929b869d2098cb441da709ae66.jpeg?x-oss-process=style/s300x300',
            //         avatar: 'https://public-cdn-oss.mosoteach.cn/avatar/2020/01/a2f12c73eed9ee74b87f8f05865a8d3b.jpg?v=1579922683&x-oss-process=style/s300x300',
            //         teacherName: '许莫淇',
            //         isClose: false,
            //         no: '111111',
            //         time: '2023/3 - 2023/6'
            //     },
            //     {
            //         name: '前端工程化开发',
            //         cover: 'https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/effaea97669cecb86c6b9e9d2dce54cd.jpg?x-oss-process=style/s300x300',
            //         avatar: 'https://public-cdn-oss.mosoteach.cn/avatar/2020/01/a2f12c73eed9ee74b87f8f05865a8d3b.jpg?v=1579922683&x-oss-process=style/s300x300',
            //         teacherName: '许莫淇',
            //         isClose: false,
            //         no: '222222',
            //         time: '2023/3 - 2023/6'
            //     },
            //     {
            //         name: 'Web应用开发',
            //         cover: 'https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/319aa0a5a02386312000d5df99aa1a9d.jpeg?x-oss-process=style/s300x300',
            //         avatar: 'https://public-cdn-oss.mosoteach.cn/avatar/2020/01/a2f12c73eed9ee74b87f8f05865a8d3b.jpg?v=1579922683&x-oss-process=style/s300x300',
            //         teacherName: '许莫淇',
            //         isClose: true,
            //         no: '333333',
            //         time: '2023/2 - 2023/3'
            //     },
            // ]
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green'},
                {id: 2235, color: 'blue'}
            ],
            sizes: ['s','m','l','xl']
        }
    }
})