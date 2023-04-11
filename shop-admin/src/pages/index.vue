<template>
    <div>
        {{ tokenStr }}
    </div>
    <div>
        {{ token }}
    </div>
</template>

<script setup>

import { getToken } from '~/utils/token.js'
import { ref } from 'vue';

import { useAdmin } from '~/store'
import { storeToRefs } from 'pinia'

const store = useAdmin()
const tokenStr = ref(getToken())

const { token, admin } = storeToRefs(store)


</script>

<style scoped>

</style>