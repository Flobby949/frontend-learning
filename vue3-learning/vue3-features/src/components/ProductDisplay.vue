<template>
    <div class="flex justify-around">
        <div>
            <img :src="image" class="w-3/5 border-solid border-ocean border-2 rounded-lg" />
        </div>
        <div class="w-full">
            <p class="text-3xl">{{ title }}</p>
            <p v-if="inStock">在售</p>
            <p v-else>售罄</p>
            <p>Price: {{ price }}</p>
            <li v-for="(item, index) in detail" :key="index">
                {{ item }}
            </li>
            <div v-for="(variant, index) in variants" :key="variant.id" class="w-12 h-12 rounded-full m-2 cursor-pointer"
                :class="{
                    blue: 'bg-[blue]',
                    green: 'bg-[green]'
                }[variant.color]" @mouseover="changeIndex(index)">
            </div>
            <PrettyButton :isActive="inStock" @btn-click="addToCart">
                <template #default>
                    Add To Cart
                </template>
            </PrettyButton>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import socksGreenImg from '@/assets/images/socks_green.jpg'
import socksBlueImg from '@/assets/images/socks_blue.jpg'
import PrettyButton from './PrettyButton.vue';

const props = defineProps({
    isVip: {
        type: Boolean,
        required: false,
        default: false
    }
})

const emit = defineEmits(['add-to-cart'])

const product = ref('Socks')
const brand = ref('Vue3')
const selectIndex = ref(0)
const detail = ref([
    '50% cotton', '30% wool', '20% polyester'
])
const variants = ref([
    {
        id: 2234,
        color: 'green',
        image: socksGreenImg,
        quantity: 50
    },
    {
        id: 2235,
        color: 'blue',
        image: socksBlueImg,
        quantity: 0
    }
])
const title = computed(() => {
    return brand.value + ' ' + product.value
})
const image = computed(() => {
    return variants.value[selectIndex.value].image
})
const inStock = computed(() => {
    return variants.value[selectIndex.value].quantity > 0
})
const price = computed(() => {
    return props.isVip ? 'Free' : 99.99
})
const addToCart = () => {
    emit('add-to-cart', variants.value[selectIndex.value])
}
const changeIndex = (index) => {
    selectIndex.value = index
}
</script>
