<template>
  <div class="card" :class="item.finish ? 'finish' : ''">
    <img :src="update(item.img)" class="img" />
    <div>
      <h2>{{ item.title }}</h2>
      <p>{{ item.date }}</p>
      <p>{{ item.finish ? '结束' : '进行中' }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})

function update(url) {
  return new URL(`../assets/images/${url}`, import.meta.url).href
}
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