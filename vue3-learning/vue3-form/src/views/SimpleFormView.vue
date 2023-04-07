<template>
  <div class="m-3 p-3 text-cyan-500">
    <span class="text-2xl font-bold my-2">表单实现</span>
    <form>
      <BaseInput v-model="event.title" label="标题" type="text" />
      <BaseSelect :options="categories" label="分类" v-model="event.category"/>
      <h3>附加</h3>
      <div>
        <BaseCheckbox v-model="event.extras.coding" label="编程" />
      </div>
      <div>
        <BaseCheckbox v-model="event.extras.music" label="音乐" />
      </div>
      <h3>是否有宠物</h3>
      <div v-for="option in petOptions" :key="option.value">
        <BaseRadio v-model="event.pets" :value="option.value" :label="option.label" name="pets" />
      </div>
      <button type="submit" class="px-12 py-2 bg-cyan-600 text-white rounded-3xl my-2">提交</button>
    </form>
    <pre>{{ event }}</pre>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import BaseCheckbox from '../components/BaseCheckbox.vue';
import BaseInput from '../components/BaseInput.vue';
import BaseRadio from '../components/BaseRadio.vue';
import BaseSelect from '../components/BaseSelect.vue';

const categories = reactive([
  '编程','工具','博客','学习','工作'
])

const event = reactive({
  category: '',
  title: '',
  pets: 1,
  extras: {
    coding: false,
    music: false
  }
})

const petOptions = reactive([
  {
    label: 'Yes',
    value: 1
  },
  {
    label: 'No',
    value: 0
  }
])

</script>

<style scoped>

</style>