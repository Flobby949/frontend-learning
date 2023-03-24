<template>
    <div>
        <div>{{ detail.title }}</div>
        <div>{{ detail.date }}</div>
        <img :src="update(detail.img)" class="img" />
        
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ItemService from '@/services/ItemService.js'
const props = defineProps({
    id: {
        type: String,
        require: true
    }
})

let detail = ref({})

onMounted(() => {
    ItemService.getItemDetail(props.id).then((res) => {
        detail.value = res.data
    })
})

// 本地图片url拼接 方法一
function update(url) {
  return new URL(`../assets/images/${url}.png`, import.meta.url).href
}

</script>

<style scoped>

</style>