<template>
    <div class="side" :style="{width: asideWidth}">
        菜单
    </div>
</template>

<script setup>
import { useAdminStore } from '~/store'
import { storeToRefs } from 'pinia'
const store = useAdminStore()
const { asideWidth } = storeToRefs(store);

</script>

<style scoped>
.side {
    @apply h-[calc(100vh-60px)] bg-blue-300
}
</style>