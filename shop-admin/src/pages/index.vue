<template>
    <div class="p-3 flex space-x-5">
        <h2>{{ adminInfo.username }}</h2>
        <img :src="adminInfo.avatar" class="w-32 h-32 rounded-full" alt="">
        <el-button type="primary" @click="handleLogout">退出登录</el-button>
    </div>
</template>

<script setup>
import { showModal, toast } from '../composables/util'
import { storeToRefs } from 'pinia'
import { useAdminStore } from '~/store'
import { useRouter } from 'vue-router';

const store = useAdminStore()
const { getInfo, adminLogout } = store
const { adminInfo } = storeToRefs(store)

const router = useRouter()

getInfo()

const handleLogout = () => {
    showModal("是否要退出登录？").then(() => {
        adminLogout()
        toast("退出登录成功")
        router.push("/login")
    })
}

</script>

<style scoped>

</style>