<template>
	<view class="flex p-1 min-h-[56px] w-screen items-start box-border">
		<img :src="resource.cover" class="h-12 w-12">
		<view v-if="resource.type !== 1 && resource.download" 
		class="h-12 w-12 position-absolute bg-gray-700/60 rounded-sm flex justify-center items-center z-[5]">
			<text class="iconfont icon-download text-slate-200"></text>
		</view>
		<view class="flex-1 flex flex-col ml-2 min-h-[56px] justify-between">
			<text>{{resource.name}}</text>
			<text class="text-xs text-gray-400" v-if="resource.type !== 1">{{resource.size}}</text>
			<view class="flex justify-start items-center text-xs text-gray-400">
				<text class="iconfont icon-download text-xs text-gray-400 mr-1" v-if="resource.type !== 1 && resource.download"></text>
				<text class="mr-3" v-if="resource.type !== 1">{{resource.download ? '允许下载' : '禁止下载'}}</text>
				<text>{{resource.time}} 发布</text>
			</view>
			<text class="text-xs text-gray-400" v-if="resource.des !== undefined">备注: {{resource.des}}</text>
		</view>
		<view class="flex flex-col justify-around items-end">
			<text class="iconfont icon-right-arrow text-gray-400 font-weight-bold rotate-90"></text>
			<text class="text-xs text-gray-400">{{ resource.watchCount }} 人查看</text>
			<text class="text-xs text-green-400">{{ resource.score }} 经验</text>
		</view>
	</view>
</template>

<script setup>
	defineProps({
		resource: {
			type: Object,
			default: {
				name: '计数器练习',
				size: '108KB',
				time: '03.14 10:09',
				score: 3,
				type: 0,
				cover: '/static/logo.png',
				download: true,
				watchCount: 30,
				des: '备注'
			}
		}
	})
</script>

<style>

</style>