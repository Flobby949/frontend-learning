<script setup>
import { toRef, reactive, toRefs, toRaw } from 'vue'

const obj = {
  name: '张三',
  age: 18
}

// toRef
const name = toRef(obj, 'name')
const age = toRef(obj, 'age')

const change = () => {
  name.value = '李四'
  age.value++
  console.log('obj:', JSON.stringify(obj), 'name:', name.value, 'age:', age.value);
}

// toRefs
const project = reactive({
  projName: 'Vue.js',
  projAuthor: '尤雨溪'
})

let { projName, projAuthor } = toRefs(project)

const changeProject = () => {
  projName.value = 'Vue3.js'
  projAuthor.value = 'Evan You'
  console.log('project:', JSON.stringify(project), 'projName:', projName.value, 'projAuthor:', projAuthor.value);
}

// toRaw
const book = reactive({
  bookName: '前端工程化开发体验版',
  bookPrice: 66.6
})

const data = toRaw(book)

const changeBook = () => {
  data.bookName = '前端工程化开发正式版'
  data.bookPrice = 88.8
  console.log('book:', data, 'bookName:', data.bookName, 'bookPrice:', data.bookPrice);
}


</script>

<template>
    <h2>toRef</h2>
  <div>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="change">按钮</button>
  </div>

  <h2>toRefs</h2>
  <div>
    <h2>{{ projName }}</h2>
    <p>{{ projAuthor }}</p>
    <button @click="changeProject">改变</button>
  </div>

  <h2>toRaw</h2>
  <div>
    <h3>书名：{{ data.bookName }}</h3>
    <h4>价格：{{ data.bookPrice }}</h4>
    <button @click="changeBook">改变</button>
  </div>
</template>

<style scoped></style>