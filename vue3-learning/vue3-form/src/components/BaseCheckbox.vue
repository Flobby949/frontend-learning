<template>
    <input type="checkbox" :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)" class="mr-2">
    <label v-if="label">{{ label }}</label>
</template>

<script setup>

defineProps({
    label: {
        type: String,
        defaule: ''
    },
    modelValue: {
        type: [String, Number],
        defaule: ''
    }
})
</script>

<style scoped>

</style>