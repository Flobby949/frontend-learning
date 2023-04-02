<script setup>
import { inject, ref } from 'vue'

const msg = inject('msg', ref('hello provide/inject'))

const onChangeMsg = () => {
  msg.value = '你好，Vue3'
}
</script>

<template>
  <div>
    <p>msg：{{ msg }}</p>
    <button @click="onChangeMsg">provide/inject 改变 msg</button>
  </div>
</template>