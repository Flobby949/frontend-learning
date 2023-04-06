<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav class="flex bg-orange-400 text-xl justify-around h-10 items-center">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <div class="container w-4/5 py-28">
    <RouterView />
  </div>
</template>

<style scoped>

nav {
  width: 100%;
}

nav a.router-link-exact-active {
  color: #fff;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
</style>
