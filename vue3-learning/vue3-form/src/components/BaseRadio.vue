<template>
    <input type="radio" class="mr-2" :checked="modelValue === value" :value="value" v-bind="$attrs"
       @change="$emit('update:modelValue', value)" >
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
    },
    value: {
        type: [String, Number],
        required: true
    }
})
</script>

<style scoped>

</style>