<script setup>
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/react">响应式API</RouterLink>
        <RouterLink to="/refAndReactive">ref 和 reactive</RouterLink>
        <RouterLink to="/toRef">toRef toRefs toRaw</RouterLink>
        <RouterLink to="/computed">计算属性</RouterLink>
        <RouterLink to="/watch">侦听器</RouterLink>
        <RouterLink to="/component">组件</RouterLink>
        <RouterLink to="/slot">插槽组件</RouterLink>
        <RouterLink to="/model">V-Model</RouterLink>
        <RouterLink to="/vueuse">VueUse</RouterLink>
        <RouterLink to="/use">自定义use</RouterLink>
        <RouterLink to="/sock">Sock Ex</RouterLink>
      </nav>
  </header>

  <main class="bg-[#c4ebff] m-10">
    <RouterView />
  </main>
</template>

<style scoped>
a {
  padding: 0 1rem;
  font-size: 20px;
  color: #fff;
  text-decoration: none;
}

header {
  width: 100vw;
  height: 50px;
  padding: 10px 0;
  background: #48c2ff;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a.router-link-exact-active {
  font-weight: 700;
  color: #bcfa38;
}

main {
  padding: 30px;
}
</style>
