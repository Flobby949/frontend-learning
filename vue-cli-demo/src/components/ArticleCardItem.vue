<template>
  <div class="card">
    <div class="info">
      <div class="title">{{ article.title }}</div>
      <div class="content line">{{ article.content }}</div>
      <div class="footer">
        <span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zuanshix"></use></svg
          >{{ article.score }}</span
        >
        <span>{{ article.author }}</span>
        <span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-pinglun2"></use></svg
          >{{ article.comment }}</span
        >
        <span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-aixin_shixin"></use></svg
          >{{ article.like }}</span
        >
      </div>
    </div>
    <div class="cover" v-if="article.hasCover">
      <img :src="article.cover" style="width: 160px; height: 100px" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  article: {
    type: Object
  }
})
</script>

<style scoped>
.card {
  width: 625px;
  margin: 0 15px;
  height: 160px;
  display: flex;
  border-bottom: 1px #f0f0f0 solid;
  align-items: center;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 5px;
  justify-content: space-around;
}

.title {
  font-size: 18px;
  font-weight: 700;
}

.title:hover {
  text-decoration: underline;
}

.content {
  font-size: 13px;
  color: #999999;
  margin: 10px 0;
  flex: 1;
}

.cover {
  border-radius: 5px;
  overflow: hidden;
  height: 100px;
}

.footer {
  margin-left: -10px;
  font-size: 14px;
  color: #999;
}

span {
  margin: 0 10px;
}

svg {
  margin-right: 5px;
}

.line {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>