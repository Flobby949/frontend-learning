<script setup>
import { computed, ref, toRefs } from "vue"

const person = {
  name: 'flobby',
  age: 23
}
// 修改值，但是不更新视图
const { name, age } = toRefs(person)
const changeValue = () => {
  name.value = 'jcx'
  age.value = 18
  console.log(name.value + ',' + age.value);
}

// 计算属性
const count = ref(0)
const add = computed(() => count.value+1)
const addCount = () => { count.value ++ }

// 监听器

</script>

<template>
  <div>
    <h2>{{ person }}</h2>
    <button @click="changeValue">修改</button>
  </div>
  <div>
    {{ add }}
  </div>
  <button @click="addCount">ADD</button>
</template>
