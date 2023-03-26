<template>
  <div>
    <header>
      <nav>
        <RouterLink to="/home"><img src="../assets/jianshu/logo.png" class="logo" /></RouterLink>
        <RouterLink to="/home">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhinan"></use>
          </svg>
            首页
        </RouterLink>
        <RouterLink to="/todo">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouji-yidongduanxiazai"></use>
          </svg>
          下载App
        </RouterLink>
        <RouterLink to="/">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-huangguan"></use>
          </svg>
          会员
        </RouterLink>
        <RouterLink to="/it">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-m-fuwenben"></use>
          </svg>
          IT技术
        </RouterLink>        
        <RouterLink to="/login">登陆</RouterLink>
        <RouterLink to="/register">注册</RouterLink>
        <button class="writeBtn">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yongyan"></use>
          </svg>
          写文章
        </button>  
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
header {
  line-height: 58px;
  background-color: #fff;
  border-bottom: 1px #f0f0f0 solid;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  height: 58px;
  display: flex;
  display: flex;
  justify-content: space-around;
}

nav a.router-link-exact-active {
  color: #ec705b;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  font-size: 20px;
  color: #000;
  text-decoration: none;
}

nav a:hover {
  background: #f5f5f5;
}

.logo {
  height: 56px;
  width: 100px;
}

.writeBtn {
  width: 100px;
  height: 40px;
  margin: auto 0;
  background: #ec705b;
  color: #fff;
  border-radius: 50px;
  font-size: 16px;
  border: none;
}
</style>