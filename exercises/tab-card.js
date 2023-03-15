const { createApp, ref, reactive } = Vue

createApp({
    setup() {
        const currentIdx = ref(0);
        const messageIdx = ref(0);

        const tabs = reactive([
            {
                name: '资源',
                count: 4
            },
            {
                name: '成员',
                count: 31
            },
            {
                name: '活动',
                count: 9
            },
            {
                name: '消息',
                count: 0
            }
        ])

        const contents = reactive([
            {
                resources: [
                    {
                        img: 'https://static-cdn-oss.mosoteach.cn/mssvc/file-type-icons-v2/icon_res_pdf@2x.png',
                        title: '选项卡练习'
                    },
                    {
                        img: 'https://static-cdn-oss.mosoteach.cn/mssvc/file-type-icons-v2/icon_res_pdf@2x.png',
                        title: '计数器练习'
                    },
                    {
                        img: 'https://public-cdn-oss.mosoteach.cn/mssvc/ccfile/capture/2023/03/ba821ee2284aaf21ed021f81352ed613.jpg?x-oss-process=style/s300x300',
                        title: 'uni-app 说明（下）.mp4'
                    },
                    {
                        img: 'https://public-cdn-oss.mosoteach.cn/mssvc/ccfile/capture/2023/03/eaee0765cf513850b221c404f677c335.jpg?x-oss-process=style/s300x300',
                        title: 'uni-app 说明（上）.mp4'
                    }
                ]
            }, {
                list: ["孙宇航", "金晨星", "曹栋梁", "杨⻄澳", "王瀚锋"]
            }, {
                list: ['uni-app (1)', '全课 (1)', 'Vue 3 入门 (2)']
            }, {
                messages: [
                    {
                        img: 'https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/effaea97669cecb86c6b9e9d2dce54cd.jpg?x-oss-process=style/s300x300',
                        title: '班课通知'
                    },
                    {
                        img: 'https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/effaea97669cecb86c6b9e9d2dce54cd.jpg?x-oss-process=style/s300x300',
                        title: '私聊通知'
                    }
                ]
            }
        ])

        const messageContents = reactive([
            {
                messageContent:['Composition API', 'Pinia 状态管理']
            },
            {
                messageContent:['Vue 3 起步', 'Vue 路由']
            }
        ])

        const changeTab = (index) => {
            currentIdx.value = index;  
        };

        const changeMessage = (index) => {
            messageIdx.value = index
        }

        return { currentIdx, messageIdx, tabs, contents, messageContents, changeTab, changeMessage }
    }
}).mount("#app");