<template>
    <div>
        <el-row class="box-border w-screen h-screen">
            <el-col :span="16" class="bg-blue-400 text-white col-center">
                <span class="text-5xl font-bold mb-10">管 理 系 统</span>
                <span class="text-3xl">shop-admin</span>
            </el-col>
            <el-col :span="8" class="col-center">
                <h2 class="text-3xl font-bold">登录</h2>
                <div class="text-sm text-gray-500 flex w-full justify-center items-center p-5">
                    <span class="h-[1px] w-1/5 bg-gray-200"></span>
                    <span class="mx-2 ">账号密码登录</span>
                    <span class="h-[1px] w-1/5 bg-gray-200"></span>
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
import { reactive, ref } from 'vue';
import { adminLogin } from '~/api/admin'
import router from '~/router'
import { useAdmin } from '~/store'

import { setToken } from '~/utils/token'
import { toast } from '~/utils/toast'

const store = useAdmin()
const { setStoreToken } = store

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
            // 判断状态码，是否登录成功
            if (res.code === 0) {
                // 将登录成功返回 token 存入 cookie
                setToken(res.data.token)
                setStoreToken(res.data.token)
                toast(res.msg)
                router.push('/')
            } else {
                toast(res.msg || '登录失败', 'error')
            }
        }).finally(() => {
            loading.value = false
        })
    })
}
</script>

<style scoped>
.col-center {
    @apply flex flex-col justify-center items-center
}
</style>