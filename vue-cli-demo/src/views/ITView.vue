<template>
  <div class="main">
    <nav>
      <RouterLink to="backend">后端</RouterLink>
      <RouterLink to="frontend">前端</RouterLink>
      <RouterLink to="ios">IOS</RouterLink>
    </nav>
    <div class="container">
        <RouterView />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.main {
  display: flex;
  padding: 10px 275px;
}
nav {
  flex-direction: column;
  width: 30%;
  font-size: 12px;
  text-align: center;
  height: 58px;
  display: flex;
}

nav a.router-link-exact-active {
  color: #ec705b;
  background: #f0f0f0;
}

nav a {
  display: inline-block;
  padding: 10px 1rem;
  font-size: 20px;
  color: #000;
  text-decoration: none;
  text-align: start;
  border-radius: 5px;
}

nav a:hover {
  background: #f0f0f0;
}

.container {
    padding: 20px;
    flex: 1;
}
</style>