<script setup>
import { reactive, ref, defineAsyncComponent, provide } from "vue";
import ChildComp from '../components/ChildComp.vue'
import UserInfo from '../components/UserInfo.vue';
import InjectProvider from '../components/InjectProvider.vue';

// provide/inject
const injectMsg = ref('hello provide/inject')
provide('msg', injectMsg)

// 异步组件
const ChildItem = defineAsyncComponent(() => import('../components/ChildItem.vue'));

const msg = ref('父组件msg')
let list = reactive([1, 2, 3])

const changeMsg = (str) => {
  msg.value = str
}

const changeList = (arr) => {
  list.splice(0, list.length, ...arr)
}


// 子组件 ref
const userInfoRef = ref()

const getName = () => {
  // 获取子组件 name
  console.log(userInfoRef.value.name)
  // 执行子组件方法
  userInfoRef.value.changeName()
  // 获取修改后的 name
  console.log(userInfoRef.value.name)
}

</script>

<template>
  <Suspense>
    <template #default>
      <div>
        <!-- 异步组件-默认渲染的页面 -->
        <div class="about">
          <childItem :msg="msg" :list="list" @change-msg="changeMsg" @change-list="changeList" />
        </div>

        <div>
          <UserInfo ref="userInfoRef"></UserInfo>
          <button @click="getName">获取子组件中的数据</button>
        </div>
      </div>
    </template>

    <template #fallback>
      <!-- 页面还没加载出来展示的页面 -->
      <div>loading...</div>
    </template>
  </Suspense>
  <!-- 插入至 body -->
  <Teleport to=body>
    <ChildComp></ChildComp>
  </Teleport>
  
  <InjectProvider></InjectProvider>
</template>
