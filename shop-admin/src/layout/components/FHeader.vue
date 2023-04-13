<template>
    <div class="v-center bg-indigo-700 text-light-50 fixed top-0 left-0 right-0 h-16">
        <div class="v-center text-xl w-48 ml-2">
            <el-icon class="mr-1 text-3xl">
                <ElementPlus />
            </el-icon>
            极客空间
        </div>
        <el-icon class="icon-btn">
            <Fold />
        </el-icon>
        <div class="v-center ml-auto">
            <el-icon class="icon-btn">
                <Refresh />
            </el-icon>
            <el-icon class="icon-btn">
                <FullScreen />
            </el-icon>
            <el-icon class="icon-btn">
                <Printer />
            </el-icon>
            <el-icon class="icon-btn">
                <Setting />
            </el-icon>

            <el-dropdown class="f-center mx-5 h-64 cursor-pointer">
                <span class="v-center text-light-50">
                    <el-avatar class="mr-2" :size="25" :src="adminInfo.avatar" />
                    {{ adminInfo.username }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
              <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import { showModal, toast } from '~/composables/util'
import { useAdminStore } from '~/store'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

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
.icon-btn {
    @apply flex justify-center items-center mx-1 cursor-pointer
}

.icon-btn:hover {
    @apply bg-indigo-300
}
</style>