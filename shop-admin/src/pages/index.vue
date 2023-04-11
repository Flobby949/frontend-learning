<template>
    <div>
        {{ token }}
    </div>
</template>

<script setup>
import { useCookies } from '@vueuse/integrations/useCookies'
import { ref } from 'vue';

const cookie =  useCookies()
const token = ref(cookie.get('admin-token'))
</script>

<style scoped>

</style>