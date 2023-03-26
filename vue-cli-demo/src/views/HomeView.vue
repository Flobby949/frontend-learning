<template>
  <div class="container">
    <div class="article">
      <div v-for="(item, index) in articleList" :key="index">
        <ArticleCardItem :article="item" />
      </div>
    </div>
    <div class="bannerList">
      <img src="../assets/jianshu/banner1.png" class="banner" alt="">
      <img src="../assets/jianshu/banner2.png" class="banner" alt="">
      <img src="../assets/jianshu/banner3.png" class="banner" alt="">
      <img src="../assets/jianshu/banner4.png" class="banner" alt="">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ArticleCardItem from '../components/ArticleCardItem.vue'
let articleList = ref([
  {
    hasCover: true,
    author: '匿名',
    title: '《包法利夫人》：婚外的关系，睡过就结束了，原因很现实',
    content: '在别人看来我的命真的很好。有车有房有存款，双方父母健康恩爱，老公医学博士，努力进取，儿女双全，家务事还有保姆分担。 慢慢地听的多了我也接受了这个...',
    cover: 'https://t7.baidu.com/it/u=4198287529,2774471735&fm=193&f=GIF',
    score: 9.9,
    comment: 20,
    like: 77
  },
  {
    hasCover: false,
    author: '匿名',
    title: '越来越好的积极暗示',
    content:
      '在别人看来我的命真的很好。有车有房有存款，双方父母健康恩爱，老公医学博士，努力进取，儿女双全，家务事还有保姆分担。 慢慢地听的多了我也接受了这个...',
    cover: 'https://t7.baidu.com/it/u=4198287529,2774471735&fm=193&f=GIF',
    score: 9.9,
    comment: 20,
    like: 77
  },
  {
    hasCover: false,
    author: '匿名',
    title: '一女大学生跳楼身亡',
    content:
      '刚刚听到一个女大学生跳楼身亡。听了这消息后，心中有无限婉惜。这孩子太傻了，怎么这么容易就放弃生命，不想想自己也得想想父母亲。 据女生的妈说：她是...',
    cover: 'https://t7.baidu.com/it/u=4198287529,2774471735&fm=193&f=GIF',
    score: 9.9,
    comment: 20,
    like: 77
  },
  {
    hasCover: false,
    author: '匿名',
    title: '结婚，是我最辈子受过最大的屈辱',
    content:
      '结婚，是我最辈子受过最大的屈辱。 27岁，一年前做了家庭主妇，带着2个孩子，现在肚子里还有一个。 昨天晚上，我告诉老公，明天要去体检，需要钱，没...',
    cover: 'https://t7.baidu.com/it/u=4198287529,2774471735&fm=193&f=GIF',
    score: 9.9,
    comment: 20,
    like: 77
  },
])
</script>

<style scoped>
.container {
  padding: 0 275px;
  display: flex;
}
.bannerList {
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.banner {
  margin: 5px;
  width: 100%;
}
</style>