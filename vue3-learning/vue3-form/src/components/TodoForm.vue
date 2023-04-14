<template>
    <div>
        <form @submit.prevent="addItemAndClear(todo)">
            <BaseInput label="添加待办事项" type="text" v-model="todo" />
            <!-- <div class="my-2">
                <button>提交</button>
            </div> -->
        </form>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useTodoListStore} from '@/stores/todoList'
import BaseInput from '@/components/BaseInput.vue';


const todo = ref('')
const store = useTodoListStore()

const addItemAndClear = (item) => {
    if (item.length === 0) {
        return
    }
    store.addTodo(item)
    todo.value = ''
}

</script>

<style scoped>

</style>