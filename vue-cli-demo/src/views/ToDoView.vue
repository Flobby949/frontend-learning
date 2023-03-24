<template>
  <div class=flex>
    <div v-for='item in items' :key='item.id'>
      <ToDoItem :item=item />
    </div>
  </div>
</template>

<script setup>
// @ 表示从 src 开始
import ToDoItem from '@/components/ToDoItem.vue'
// import ItemService from '@/services/ItemService.js'
import { ref, onMounted } from 'vue'
import axios from 'axios';

let items = ref([
        {
            id: 1,
            title: 'Vue 3 学习',
            date: '2023-03-23',
            img: 'vue',
            finish: false
        },
        {
            id: 2,
            title: 'Pinia 学习',
            date: '2023-03-24',
            img: 'pinia',
            finish: false
        },
        {
            id: 3,
            title: 'Vite 学习',
            date: '2023-03-25',
            img: 'vite',
            finish: false
        },
        {
            id: 4,
            title: 'TypeScript 学习',
            date: '2023-03-26',
            img: 'ts',
            finish: false
        }
])
onMounted(() => {
  axios.get('http://localhost:3000/data').then((res) => {
      items.value = res.data
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