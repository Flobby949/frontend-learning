<template>
        <label v-if="label" class="text-cyan-500">{{ label }}</label>
        <select class="p-2 w-full border border-1 border-solid border-cyan-400 rounded-md" :value="modelValue"
            v-bind="{...$attrs, onChange: ($event) => {$emit('update:modelValue', $event.target.value)} }">
        <option v-for="option in options" :key="option" :selected="option === modelValue">
            {{ option }}
        </option>
        </select>
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
    options: {
        type: Array,
        required: true
    }
})
</script>

<style scoped>

</style>