<script setup>
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/react">响应式API</RouterLink>
        <RouterLink to="/component">组件</RouterLink>
      </nav>
  </header>

  <main>
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
