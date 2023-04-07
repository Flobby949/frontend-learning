### 当前小应用存在的问题

* 删除后新增的编程异常
* 已完成未完成分开展示时的修改状态异常
* 上一个问题导致批量删除出现异常
* 重复修改状态后的删除异常

### 正常功能的实现

> 总页面的展示

useList.js 中定义响应式数组，页面中通过vfor渲染，其中定义 item 组件

```vue
<template>
    <div class="flex h-9 w-full items-center" @click="emit('finish-item')">
        <span class="text-xl mr-10">{{ todo.id }}</span>
        <input type="checkbox" id="checkbox" class="outline-none w-4 h-4 mr-2" v-model="todo.finished" />
        <slot name="icon"></slot>
        <span
        class="text-xl"
        :class="[todo.finished ? 'line-through decoration-double text-red-500' : 'text-green-400']">
            {{ todo.title }}
        </span>
        <span class="text-xl ml-5" @click="emit('delete-item')">删除</span>
    </div>
</template>

<script setup>
import { toRefs } from 'vue'
const props = defineProps({
    todo: {
        type: Object,
        required: true
    }
})
const { todo } = toRefs(props)
const emit = defineEmits(['finish-item'])
</script>
```

> 总页面修改状态

useList.js 中修改状态，同时添加 id 到批量选中数组，取消完成没有把 id 从数组中删除

```js
const changeItemFinish = (index) => {
        todoItems[index].finished = !todoItems[index].finished
        batchSelected.value.push(todoItems[index].id)
}
```

> 总页面删除 & 批量删除

定义方法

```js
    const deleteItem = (id) => {
        for (let index = 0; index < todoItems.length; index++) {
            if (id === todoItems[index].id) {
                todoItems.splice(index, 1)
            }
        }
    }

    // 批量选中数组中存在当前id就移除元素，反向遍历，防止删除后出现下标不足异常
    const deleteItems = () => {
        for (let i = todoItems.length - 1; i >= 0; i--) {
            if (batchSelected.value.includes(todoItems[i].id)) {
                todoItems.splice(i, 1)
            }
        }
    }
```

> 已完成，未完成分开展示

定义两个计算属性，分别过滤已完成，未完成

由于是计算属性，导致修改状态的时候出现异常

```js
    const activeList = computed(() => {
        return todoItems.filter((item) => !item.finished)
    })
    const finishedList = computed(() => {
        return todoItems.filter((item) => item.finished)
    })
```

