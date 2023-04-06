<template>
	<view class="flex h-9 px-3 items-center">
		<view class="left flex-1 flex items-center h-full">
			<view class="h-full w-9 flex justify-center items-center" v-if="showIcon">
				<slot name="icon" />
			</view>
			<view class="mx-3">
				{{ title }}
				<slot name="title" />
			</view>
		</view>
		<view class="right">
			<view class="iconfont icon-right-arrow"></view>
			<slot name="right" />
		</view>
	</view>
</template>

<script setup>
defineProps({
	showIcon: {
		type: Boolean,
		default: false
	},
	title: {
		type: String,
		default: '标题'
	}
})
</script>

<style scoped>

</style>