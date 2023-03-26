<template>
    <div>
        <ArticleCardItem :article="article" />

    </div>
</template>

<script setup>
import { ref } from 'vue';
import ArticleCardItem from '../components/ArticleCardItem.vue';
let article = ref({
  hasCover: false,
  author: '匿名',
  title: "Android 架构之 MVI 完全体 | 重新审视 MVVM 之殇，PartialChange & Reducer 来拯救",
  content: "这是 MVI 架构的第三篇，系列文章目录如下： Android 架构之 MVI 雏形 | 响应式编程 + 单向数据流 + 唯一可信数据源[https://juejin.cn/post/7087717...",
  cover: "https://t7.baidu.com/it/u=4198287529,2774471735&fm=193&f=GIF",
  score: 9.9,
  comment: 20,
  like: 77
})
</script>

<style scoped>

</style>