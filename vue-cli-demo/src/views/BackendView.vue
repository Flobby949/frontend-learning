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
  title: "这几种常见的 JVM 调优场景，你知道吗？",
  content: "假定你已经了解了运行时的数据区域和常用的垃圾回收算法，也了解了Hotspot支持的垃圾回收器。 一、cpu占用过高 cpu占用过高要分情况讨论，是不是业务上在搞活动，突然有大批的流量进来，而且活动结...",
  cover: "https://t7.baidu.com/it/u=4198287529,2774471735&fm=193&f=GIF",
  score: 9.9,
  comment: 20,
  like: 77
})
</script>

<style scoped>

</style>