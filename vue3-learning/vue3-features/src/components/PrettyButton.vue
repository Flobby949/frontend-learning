<template>
    <button class="outline-none text-white px-10 py-3 rounded-lg"
        :class="[isActive ? 'bg-[#39495c] cursor-pointer' : 'bg-[#d8d8d8] cursor-not-allowed']" :disabled="!isActive"
        @click="emit('btn-click')">
        <slot name="icon" />
        <slot />
    </button>
</template>

<script setup>
import { toRefs } from 'vue';
const props = defineProps({
    isActive: {
        type: Boolean,
        required: false,
        default: true
    }
})

const { isActive } = toRefs(props)

const emit = defineEmits(['btn-click'])

</script>

<style scoped></style>