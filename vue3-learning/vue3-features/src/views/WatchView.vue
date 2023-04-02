<script setup>
import { watch, ref, reactive, watchEffect, onUpdated } from 'vue';

const str = ref('此时此刻')
const age = ref(18)

// 3s后改变值
setTimeout(() => {
    str.value = '恰如此时此刻'
    age.value = 19
}, 3000)

// 监听多个 ref
watch([str, age], (newV, oldV) => {
    console.log('监听多个 ref');
    console.log(newV, oldV)
})

// 监听 reactive 对象
let info = reactive({
    name: '张三',
    age: 18
})

//3s后改变值
setTimeout(() => {
    info.name = '李四'
    info.age = 28
}, 3000)

// 监听 reactive 定义的响应式对象
watch(info, (newV, oldV) => {
    console.log('监听 reactive');
    console.log(newV, oldV)
})

// 监听 reactive 定义响应式对象的单一属性
watch(() => info.age, (newV, oldV) => {
    console.log('监听单一属性');
    console.log(newV, oldV)
})

// 监听响应式对象（含有引用类型），深度监听
let game = reactive({
    title: '权利的游戏',
    player: {
        name: '金晨星',
        age: 22
    }
})

setTimeout(() => {
    game.player.name = 'Flobby'
    game.player.age = 21
}, 2000);

watch(
    () => [game.player.name, game.player.age],
    (newV, oldV) => {
        console.log('深度监听');
        console.log(newV, oldV);
    },
    {
        deep: true
    }
)

// watchEffect
let num = ref(1)
//3s后改变值
setTimeout(() => {
    num.value++
}, 3000)

watchEffect((onInvalidate) => {
    console.log('watchEffect');
    console.log('num 值改变：', num.value)

    onInvalidate(() => {
        console.log('执行');
    });
}, {
  flush: onUpdated, //此时这个函数会在组件更新之后去执行
  onTrigger(e) {   //作为一个调试工具，可在开发中方便调试
    console.log('触发', e);
  },
})

</script>

<template>
    <h2>{{ str }}</h2>
    <h2>{{ age }}</h2>

    <h3>姓名：{{ info.name }} 年龄：{{ info.age }}</h3>


    <h2>{{ game.player.name }}</h2>
    <h3>{{ game.player.age }}</h3>

    <h2>num 的值：{{ num }}</h2>
</template>