<template>
    <div class="v-center bg-indigo-700 text-light-50 fixed top-0 left-0 right-0 h-16">
        <div class="f-center ml-2 text-xl transition-all duration-300" :style="{ width: asideWidth }">
            <el-icon class="text-3xl">
                <ElementPlus />
            </el-icon>
            <span v-show="!isShrink">极客空间</span>
        </div>
        <el-icon class="icon-btn" @click="handleAsideWidth">
            <Fold v-if="!isShrink" />
            <Expand v-else />
        </el-icon>
        <div class="v-center ml-auto">
            <el-icon class="icon-btn">
                <Refresh />
            </el-icon>
            <el-icon class="icon-btn" @click="toggle">
                <FullScreen v-if="!isFullscreen" />
                <Aim v-else />
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
                        <el-dropdown-item @click="showPasswordDrawer">修改密码</el-dropdown-item>
                        <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>

    <!-- 抽屉 -->
    <form-drawer ref="formDrawerRef" title="修改密码" @submit="update">
        <el-form label-width="80px" :rules="rules" label-position="left" :model="updatePasswordForm" ref="formRef">
            <el-form-item label="旧密码" prop="oldPassword">
                <el-input v-model="updatePasswordForm.oldPassword" placeholder="请输入旧密码"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newPassword">
                <el-input v-model="updatePasswordForm.newPassword" placeholder="请输入新密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="rePassword">
                <el-input v-model="updatePasswordForm.rePassword" placeholder="请确认密码"></el-input>
            </el-form-item>
        </el-form>
    </form-drawer>
</template>

<script setup>
import { useAdminStore } from '~/store'
import { storeToRefs } from 'pinia'
import { useFullscreen } from '@vueuse/core'
import FormDrawer from '~/components/FormDrawer.vue'
import { useLogout, useUpdatePassword } from '~/composables/useAdmin'

const store = useAdminStore()
const { handleAsideWidth } = store
const { adminInfo, asideWidth, isShrink } = storeToRefs(store)

// 自定义use
const { handleLogout } = useLogout()
const { updatePasswordForm,
    formRef,
    rules,
    formDrawerRef,
    update,
    showPasswordDrawer } = useUpdatePassword()

// vueuse
const {
    // 是否全屏状态
    isFullscreen,
    // 切换全屏
    toggle
} = useFullscreen();
</script>

<style scoped>
.icon-btn {
    @apply flex justify-center items-center mx-1 cursor-pointer text-[40px] p-2
}

.icon-btn:hover {
    @apply bg-indigo-300
}
</style>