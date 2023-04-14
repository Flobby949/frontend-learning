<template>
    <div v-for="todo in todoList" :key="todo.id">
        <div class="flex p-3">
            <span :class="todo.completed ? 'line-through' : ''">{{ todo.item }}</span>
            <span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
            <span @click="deleteTodo(todo.id)">&#10060;</span>
        </div>
    </div>
</template>

<script setup>
import {useTodoListStore} from '@/stores/todoList'
import {storeToRefs} from 'pinia'
const store = useTodoListStore()
const { todoList } = storeToRefs(store)
const {toggleCompleted, deleteTodo} = store

</script>

<style scoped>

</style>