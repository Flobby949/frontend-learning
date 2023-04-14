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
                        <el-dropdown-item @click="rePassword">修改密码</el-dropdown-item>
                        <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>

    <!-- 抽屉 -->
    <el-drawer title="修改密码" v-model="showDrawer" size="30%" :close-on-press-escape="false">
        <el-form label-width="80px" :rules="rules" :model="updatePasswordForm" ref="formRef">
            <el-form-item label="旧密码" prop="oldPassword">
                <el-input v-model="updatePasswordForm.oldPassword" placeholder="请输入旧密码"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newPassword">
                <el-input v-model="updatePasswordForm.newPassword" placeholder="请输入新密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="rePassword">
                <el-input v-model="updatePasswordForm.rePassword" placeholder="请确认密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="bg-indigo-500 text-light-50 w-full p-4 rounded-full" @click="update">提交</el-button>
            </el-form-item>
        </el-form>
    </el-drawer>
</template>

<script setup>
import { showModal, toast } from '~/composables/util'
import { useAdminStore } from '~/store'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useFullscreen } from '@vueuse/core'
import { reactive, ref } from 'vue'
import { updatePassword } from '~/api/admin'

const store = useAdminStore()
const { getInfo, adminLogout } = store
const { adminInfo } = storeToRefs(store)
const router = useRouter()

const {
    // 是否全屏状态
    isFullscreen,
    // 切换全屏
    toggle
} = useFullscreen()
getInfo()

const handleLogout = () => {
    showModal("是否要退出登录？").then(() => {
        adminLogout()
        toast("退出登录成功")
        router.push("/login")
    })
}

const showDrawer = ref(false)
const rePassword = () => {
    showDrawer.value = true
}

const formRef = ref(null)
const updatePasswordForm = reactive({
    oldPassword: '',
    newPassword: '',
    rePassword: ''
})
const loading = ref(false)

// 确认密码规则
const rePassRule = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('确认密码不能为空'))
    } else if (value !== updatePasswordForm.newPassword) {
        console.log(updatePasswordForm.newPassword);
        callback(new Error('与新密码不一致'))
    } else {
        callback()
    }
}

// 规则
const rules = {
    oldPassword: [
        { required: true, message: '旧密码不能为空', trigger: 'blur' }
    ],
    newPassword: [
        { required: true, message: '新密码不能为空', trigger: 'blur' },
        { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
    ],
    rePassword: [
        {required: true, validator: rePassRule, trigger: 'blur' }
    ]
}

const update = () => {
    formRef.value.validate((valid) => {
        if (!valid) {
            return
        }
        loading.value = true
        updatePassword(
            updatePasswordForm.oldPassword, 
            updatePasswordForm.newPassword).then((res) => {
                console.log(res);
                if (res.code === 0) {
                    toast('修改成功，请重新登录')
                    adminLogout().then(() => router.push('/login'))
                } else {
                    toast(res.msg, 'error')
                }
        }).finally(() => {
            loading.value = false
        })
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