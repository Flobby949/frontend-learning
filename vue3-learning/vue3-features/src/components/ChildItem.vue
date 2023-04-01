<script setup>
defineProps({
    msg: String,
    list: Array
})

let emits = defineEmits(['change-msg', 'change-list'])

const changeMsg = () => {
    emits('change-msg', '子组件带参传递事件')
}

const changeList = () => {
    emits('change-list', [...'子组件带参传递事件'])
}

</script>

<template>
    <div>
        <h1>父组件传值，子组件接收，子组件派发事件</h1>
        <div class="info" @click="changeMsg">MSG：{{ msg }}</div>
        <div class="info" @click="changeList">LIST：{{ list }}</div>
    </div>
</template>

<style scoped>
.info {
    height: 100px;
    background: #3ad4ff;
    margin: 10px;
}
</style>