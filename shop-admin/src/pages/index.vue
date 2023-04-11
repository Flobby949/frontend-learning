<template>
    <div>
        {{ token }}
    </div>
</template>

<script setup>

import { getToken } from '~/utils/token.js'
import { ref } from 'vue';

const token = ref(getToken())

</script>

<style scoped>

</style>