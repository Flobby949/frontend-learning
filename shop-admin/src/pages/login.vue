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
import { onBeforeMount, onMounted } from 'vue';
import { useLogin } from '~/composables/useAdmin'

const {
    form,
    rules,
    formRef,
    loading,
    onSubmit
} = useLogin()

// 监听回车
function onKeyUp(e) {
    if (e.key == 'Enter') onSubmit()
}

// 监听键盘
onMounted(() => {
    document.addEventListener("keyup", onKeyUp)
})
// 移除键盘监听
onBeforeMount(() => {
    document.removeEventListener("keyup", onKeyUp)
});
</script>

<style scoped>
.bg-img {
    background-image: url('../assets/images/login_background.png');
}

.col-center {
    @apply flex flex-col justify-center items-center
}
</style>