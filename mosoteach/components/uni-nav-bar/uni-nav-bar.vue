<template>
	<uni-status-bar class="fixed-top"></uni-status-bar>
	<view class="flex h-11 items-center fixed w-screen top-11 z-10 bg-white">
		<view class="left w-1/6 text-center">
			<slot name="left" />
		</view>
		<view class="title flex-1 text-lg text-center">
			{{ title }}
			<slot name="title" />
		</view>
		<view class="right w-1/6 text-center pr-1">
			<slot name="right" />
		</view>
	</view>
</template>

<script setup>
	defineProps({
		title: {
			type:String,
			require:false
		}
	})
</script>

<style scoped>

</style>