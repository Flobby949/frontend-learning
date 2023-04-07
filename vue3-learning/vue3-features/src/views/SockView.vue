<template>
    <div class="box-border p-2">
        <div class="h-16 w-full bg-gradient-to-r from-[#16c0b0] to-[#84cf6a]">

        </div>
        <div class="my-6 mx-24 p-7 border border-solid border-[#d8d8d8] bg-white float-right">
            Cart({{ cart.length }})
        </div>
        <productDisplay :isVip="vip" @add-to-cart="handleClick"></productDisplay>
    </div>
</template>

<script setup>
import productDisplay from '@/components/ProductDisplay.vue'
import { reactive, ref } from 'vue';

const cart = reactive([])
const vip = ref(true)

const handleClick = (e) => {
    cart.push(e)
}
</script>

<style scoped></style>