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

<style scoped></style>