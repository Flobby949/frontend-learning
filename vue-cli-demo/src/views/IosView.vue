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
  title: "iOS安全--APP代码签名机制",
  content: "学习路线（内部分享内容） 加密解密（对称加密、非对称加密、混合加密） 单向散列函数 数字签名 证书 iOS签名机制 参考资料与图片来源：《图解密码技术第三版》[https://github.com/...",
  cover: "https://t7.baidu.com/it/u=4198287529,2774471735&fm=193&f=GIF",
  score: 9.9,
  comment: 20,
  like: 77
})
</script>

<style scoped>

</style>