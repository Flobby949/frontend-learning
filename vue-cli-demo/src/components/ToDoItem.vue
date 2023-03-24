<template>
  <RouterLink class="item-link" :to="{ name: 'item-detail', params: { id: item.id } }">
    <div class="card" :class="item.finish ? 'finish' : ''">
      <img :src="update(item.img)" class="img" />
      <!-- <img :src="localPath" class="img" /> -->
      <div>
        <h2>{{ item.title }}</h2>
        <p>{{ item.date }}</p>
        <p>{{ item.finish ? '结束' : '进行中' }}</p>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import { ref, watchEffect } from 'vue'

defineProps({
  item: {
    type: Object,
    required: true
  }
})

// 本地图片url拼接 方法一
function update(url) {
  console.log(url)
  return new URL(`../assets/images/${url}.png`, import.meta.url).href
}

// 本地图片url拼接 方法二
// let localPath = ref()
// watchEffect(async () => {
//   localPath.value = await import(`../assets/images/${props.item.img}.png`)
// })
</script>

<style scoped>
.card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  box-shadow: 1px 1px 13px #d3d3d3;
  box-sizing: border-box;
  padding: 10px;
  margin: 10px;
  width: 300px;
}
.img {
  width: 60px;
  height: 60px;
}
.finish {
  filter: grayscale(1);
}
</style>