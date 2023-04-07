import { computed, reactive, ref } from "vue";

export default function useToDoList() {
    // 定义响应式数据
    const todoItems = reactive([
        {
            id: 1,
            title: '吃饭',
            finished: false
        },
        {
            id: 2,
            title: '上课',
            finished: false
        },
        {
            id: 3,
            title: '睡觉',
            finished: false
        },
        {
            id: 4,
            title: '编程',
            finished: false
        }
    ])

    const activeList = computed(() => {
        return todoItems.filter((item) => !item.finished)
    })
    const finishedList = computed(() => {
        return todoItems.filter((item) => item.finished)
    })

    const batchSelected = ref([])

    // eslint-disable-next-line no-unused-vars
    const printList = () => {
        console.log('print');
    }

    // 简单封装业务逻辑
    const addItem = (val) => {
        todoItems.push({
            id: todoItems.length + 1,
            title: val,
            finished: false
        })
    }

    const changeItemFinish = (index, type) => {
        switch (type) {
            case 0: {
                todoItems[index].finished = !todoItems[index].finished
                batchSelected.value.push(todoItems[index].id)
                break
            }
            case 1: {
                activeList.value[index].finished = !activeList.value[index].finished
                batchSelected.value.push(activeList.value[index].id)
                break
            }
            case 2: {
                finishedList.value[index].finished = !finishedList.value[index].finished
                batchSelected.value.push(finishedList.value[index].id)
                break
            }
        }
    }

    const finishedCount = computed(() => {
        return todoItems.filter((item) => item.finished).length
    })

    const deleteItem = (id) => {
        for (let index = 0; index < todoItems.length; index++) {
            if (id === todoItems[index].id) {
                todoItems.splice(index, 1)
            }
        }
    }

    const deleteItems = () => {
        for (let i = todoItems.length - 1; i >= 0; i--) {
            if (batchSelected.value.includes(todoItems[i].id)) {
                todoItems.splice(i, 1)
            }
        }
    }

    return {
        todoItems,
        addItem,
        finishedCount,
        changeItemFinish,
        deleteItems,
        deleteItem,
        activeList,
        finishedList
    }
}