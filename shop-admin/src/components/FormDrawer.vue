<template>
    <el-drawer v-model="showDrawer" 
               :title="title" 
               :size="size + '%'" 
               :destroy-on-close="destroyOnClose" 
               :close-on-click-modal="closeOnClickModal">
        <div class="form-drawer">
            <div class="body">
                <slot></slot>
            </div>

            <div class="actions">
                <el-button type="default" @click="closeDrawer">取消</el-button>
                <el-button type="primary" @click="submit" :loading="loading">{{ confirmText }}</el-button>
            </div>
        </div>
    </el-drawer>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
    title: {
        type: String,
        default: '标题'
    },
    // 关闭后销毁子元素
    destroyOnClose: {
        type: Boolean,
        default: true
    },
    size: {
        type: [String, Number],
        default: 30
    },
    // 点击遮罩层关闭
    closeOnClickModal: {
        type: Boolean,
        default: false
    },
    confirmText: {
        type: String,
        default: '提交'
    }
})

const showDrawer = ref(false);
const openDrawer = () => showDrawer.value = true
const closeDrawer = () => showDrawer.value = false

const loading = ref(false)
const showLoading = () => loading.value = true
const hideLoading = () => loading.value = false

// 提交事件
const emit = defineEmits(['submit'])
const submit = () => emit('submit')

// 向父组件暴露 方法
defineExpose({
    openDrawer, closeDrawer, showLoading, hideLoading
});
</script>

<style scoped>
.form-drawer {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.form-drawer .body {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    overflow-y: auto;
    flex: 1;
}

.form-drawer .actions {
    width: 100%;
    height: 60px;
    @apply mt-auto flex items-center
}

.el-button {
    flex: 1
}
</style>