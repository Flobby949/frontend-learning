<template>
	<view class="box-border flex flex-col h-16 bg-white w-screen p-2">
		<view class="flex justify-start flex-1 items-center px-1">
			<image :src="task.cover" class="h-7 w-7"></image>
			<text class="ml-2">{{task.name}}</text>
		</view>
		<view class="flex-1 mt-1 p-1 flex text-xs">
			<text class="text-gray-400">{{task.member}} 人参与</text>
			<text class="text-green-500 flex-1 text-center">{{task.score}} 经验</text>
			<view class="flex items-center">
				<view class="h-0 w-0 rounded-full border-solid border-[5px] mr-1" :class="statusColors[task.status]"></view>
				<text class="text-gray-500">{{statusList[task.status]}}</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		reactive
	} from "vue";


	defineProps({
		task: {
			type: Object,
			require: true,
			default: {
				name: '默认活动',
				score: 10,
				member: 24,
				status: 2,
				cover: '/static/logo.png',
				joinStatus: 0
			}
		}
	})

	const statusList = ['未开始', '进行中', '已结束']
	const statusColors = ['border-gray-600', 'border-green-600', 'border-orange-600']
</script>

<style scoped>

</style>