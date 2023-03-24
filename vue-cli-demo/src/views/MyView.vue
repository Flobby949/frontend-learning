<template>
  <div class="flex">
    <div v-for="item in items.list" :key="item.id">
      <ToDoItem :item="item" />
    </div>
  </div>
</template>

<script setup>
// @ 表示从 src 开始
import ToDoItem from '@/components/ToDoItem.vue'
import { reactive, onMounted } from 'vue'
import axios from 'axios'

let items = reactive({})
onMounted(() => {
  axios
    .get('http://localhost:3000/data')
    .then((res) => {
      items.list = res.data
      console.log(items.list)
    })
    .catch((err) => {
      console.log(err)
    })
})
</script>

<style scoped>
.flex {
  display: flex;
  width: 100vw;
}
</style>