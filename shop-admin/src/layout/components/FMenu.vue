<script setup>
import { ref } from 'vue'
import { useAdminStore } from '~/store'
import { storeToRefs } from 'pinia'
import { useRouter, useRoute } from 'vue-router'

const store = useAdminStore()
const { asideWidth, isShrink, menuList } = storeToRefs(store)

const router = useRouter()
const route = useRoute()

// 默认选中当前路由
const defaultActive = ref(route.path)

const handleSelect = (e) => {
  router.push(e)
};
</script>

<template>
  <div class="f-menu" :style="{ width: asideWidth }">
    <el-menu :default-active="defaultActive" :collapse="isShrink" class="border-0" @select="handleSelect">

      <template v-for="(item, index) in menuList" :key="index">

        <el-sub-menu v-if="item.child && item.child.length > 0" :index="item.name">
          <template #title>
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span class="pl-4">{{ item.name }}</span>
          </template>
          <el-menu-item v-for="(item2, index2) in item.child" :key="index2" :index="item2.frontpath">
            <el-icon>
              <component :is="item2.icon"></component>
            </el-icon>
            <span class="pl-4">{{ item2.name }}</span>
          </el-menu-item>
        </el-sub-menu>

        <el-menu-item v-else :index="item.frontpath">
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <span class="pl-4">{{ item.name }}</span>
        </el-menu-item>

      </template>
    </el-menu>
  </div>
</template>

<style scoped>
.f-menu {
  @apply fixed top-0 left-0 bottom-0 top-16 bg-blue-100 overflow-y-auto overflow-x-hidden transition-all duration-300;
}
</style>