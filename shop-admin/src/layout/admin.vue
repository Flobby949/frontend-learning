<template>
    <el-header>
        <f-header></f-header>
    </el-header>
    <el-container>
        <el-aside :style="{ width: asideWidth }">
            <f-menu></f-menu>
        </el-aside>

        <el-main>
            <f-tag-list></f-tag-list>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useAdminStore } from '../store';
import FHeader from './components/FHeader.vue';
import FMenu from './components/FMenu.vue';
import FTagList from './components/FTagList.vue';

const store = useAdminStore()
const { asideWidth } = storeToRefs(store);
</script>

<style scoped></style>