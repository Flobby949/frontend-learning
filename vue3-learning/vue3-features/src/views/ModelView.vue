<script setup>
import { ref } from 'vue';
import ModelComp from '../components/ModelComp.vue';

const author = ref('张三')
const msg = ref('hello Vue3')

const redColor = ref('red')

const onUpdateAuthor = (val) => {
  author.value = val
}

const onUpdateMsg = (val) => {
  msg.value = val
}
</script>

<template>
  <div>
    <!-- 绑定多个 v-model -->
    <ModelComp v-model:author="author" 
      v-model:msg="msg" 
      @update-author="onUpdateAuthor" 
      @update-msg="onUpdateMsg">
    </ModelComp>
  </div>

  <p> style v-bind CSS变量注入</p>  
</template>

<style scoped>
p {
    /* 使用 v-bind 绑定组件中定义的变量 */
    color: v-bind('redColor');
  }  
</style>