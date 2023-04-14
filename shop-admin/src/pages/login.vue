<template>
    <div>
        <el-row class="box-border w-screen h-screen">
            <el-col :span="16" class="bg-img text-white col-center">
                <span class="text-5xl font-bold mb-10">管 理 系 统</span>
                <span class="text-3xl">shop-admin</span>
            </el-col>
            <el-col :span="8" class="col-center bg-transparent">
                <h2 class="text-3xl font-bold">登录</h2>
                <div class="text-sm text-gray-500 flex w-full justify-center items-center p-5">
                    <span class="h-[1px] w-1/5"></span>
                    <span class="mx-2 ">账号密码登录</span>
                    <span class="h-[1px] w-1/5"></span>
                </div>
                <el-form :model="form" label-width="120px" label-position="left" ref="formRef" :rules="rules">
                    <el-form-item label="Username" prop="username">
                        <el-input type="text" placeholder="请输入账号" v-model="form.username">
                            <template #prefix>
                                <el-icon>
                                    <user />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>

                    <el-form-item label="Password" prop="password">
                        <el-input type="password" placeholder="请输入密码" v-model="form.password">
                            <template #prefix>
                                <el-icon>
                                    <lock />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>

                    <el-button type="primary" class="w-80" @click="onSubmit" :loading="loading">登 录</el-button>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { onBeforeMount, onMounted, reactive, ref } from 'vue';
import router from '~/router'
import { useAdminStore } from '~/store'

import { toast } from '~/composables/util'

const store = useAdminStore()
const { adminLogin } = store

const form = reactive({
    username: 'admin',
    password: '123456'
})

const rules = {
    username: [
        { required: true, message: '用户名不能为空', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '密码不能为空', trigger: 'blur' }
    ]
}

const formRef = ref(null)
const loading = ref(false)

const onSubmit = () => {
    formRef.value.validate((valid) => {
        if (!valid) {
            // 校验失败
            return
        }
        loading.value = true
        adminLogin(form.username, form.password).then((res) => {
            toast(res.msg)
            if (res.code === 0) {
                router.push('/')
            }
            loading.value = false
        })
    })
}

// 监听回车
function onKeyUp(e) {
    if (e.key == 'Enter') onSubmit()
}

// 监听键盘
onMounted(() => {
    document.addEventListener("keyup", onkeyup)
})
// 移除键盘监听
onBeforeMount(() => {
    document.removeEventListener("keyup", onkeyup)
})
</script>

<style scoped>
.bg-img {
    background-image: url('../assets/images/login_background.png');
}
.col-center {
    @apply flex flex-col justify-center items-center
}
</style>