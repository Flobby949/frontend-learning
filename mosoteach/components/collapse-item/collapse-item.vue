<template>
	<view class="flex flex-col w-screen">
		<view class="box-border w-full bg-gray-100 h-12 flex justify-between px-2 items-center" @click="changeOpen">
			<text class="text-gray-500">{{ title }} ( {{count}} )</text>
			<text class="iconfont icon-right-arrow" :class="[open ? 'rotate-90' : 'rotate-180']"></text>
		</view>
		<view class="w-full py-1" v-show="open">
			<slot name="content" />
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue";
	defineProps({
		title: {
			type: String,
			default: '标题'
		},
		count: {
			type: Number,
			default: 0
		}
	})
	let open = ref(false)
	const changeOpen = () => {
		console.log(open);
		open.value = !open.value
	}
</script>

<style scoped>

</style>