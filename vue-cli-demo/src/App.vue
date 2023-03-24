<script setup>
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/todo">ToDo</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  background-color: #3a90eb;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  color: #fff;
}

nav a.router-link-exact-active {
  color: #000;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  font-size: 20px;
  color: #fff;
  text-decoration: none;
}

</style>
