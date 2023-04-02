<script setup>
defineProps({
  author: String,
  msg: String
})

const emit = defineEmits(['update-author', 'update-msg'])

const onChange = () => {
  // 触发父组件的值更新
  emit('update-author', '尤雨溪')
  emit('update-msg', 'Vue 3 中的 model 升级了')
}
</script>

<template>
  <div>
    <h3>{{ author }}</h3>
    <h3>{{ msg }}</h3>
    <button @click="onChange">改变</button>
  </div>
</template>