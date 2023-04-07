<template>
    <div>
        <div class="text-3xl font-bold w-full text-center">ToDoList</div>
        <div class="flex flex-col justify-center items-center w-full">
            <label for="inputValue">
                <input type="text" class="m-5 p-2 rounded-lg outline-none" v-model="inputValue" placeholder="请输入新的待办事项"
                    @keydown.enter="pushItem">
            </label>
            <span>{{ finishedCount }} / {{ todoItems.length }}</span>
            <div class="flex justify-around w-56">
                <span @click="change">总</span>
                <span @click="change">分</span>
            </div>
            <div v-if="show" class="p-3">
                <ul v-for="( todoItem, index ) in todoItems" :key="todoItem.id">
                    <ToDoListItem :todo="todoItem" 
                    @finish-item="changeItemFinish(index, 0)" 
                    @delete-item="deleteItem(todoItem.id)">
                    </ToDoListItem>
                </ul>
            </div>

            <div v-else class="flex w-full justify-around">
                <div class="flex-1">
                    <ul v-for="( todoItem, index ) in activeList" :key="todoItem.id">
                        <ToDoListItem :todo="todoItem" 
                        @finish-item="changeItemFinish(index, 1)" 
                        @delete-item="deleteItem(todoItem.id)">
                        </ToDoListItem>
                    </ul>
                </div>
                <div class="flex-1">
                    <ul v-for="( todoItem, index ) in finishedList" :key="todoItem.id">
                        <ToDoListItem :todo="todoItem" 
                        @finish-item="changeItemFinish(index, 2)" 
                        @delete-item="deleteItem(todoItem.id)">
                        </ToDoListItem>
                    </ul>
                </div>
            </div>

            <PrettyButton @btn-click="deleteItems">
                <template #default>
                    批量删除
                </template>
            </PrettyButton>
        </div>
    </div>
</template>

<script setup>
import useToDoList from '@/use/useList.js'
import ToDoListItem from '../components/ToDoListItem.vue';
import PrettyButton from '../components/PrettyButton.vue';
import { ref } from 'vue';

const { todoItems, addItem, finishedCount, changeItemFinish, deleteItems, deleteItem, activeList, finishedList } = useToDoList()

const inputValue = ref("")

const pushItem = () => {
    addItem(inputValue.value)
    inputValue.value = ''
}

const show = ref(true)

const change = () => {
    show.value = !show.value
}

</script>