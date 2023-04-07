<template>
        <label v-if="label">{{ label }}</label>
        <input v-bind="$attrs" class="p-2 w-full border border-1 border-solid border-cyan-400 rounded-md" :value="modelValue"
            :placeholder="label" @input="$emit('update:modelValue', $event.target.value)">
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