<template>
	<view>
		<uni-nav-bar title="后端框架技术">
			<template v-slot:left>
				<view @click="navBack" class="iconfont icon-right-arrow rotate-180"></view>
			</template>
			<template v-slot:right>
				<view class="text-sm">
					课堂表现
				</view>
			</template>
		</uni-nav-bar>
		<switch-tab-card :activeTab="0" :taskCount="[1,1,1]"></switch-tab-card>
		
		<collapse-item class="mt-36" title="后端">
			<template v-slot:content>
				<view class="divide-y divide-gray-200 divide-x-0 divide-solid bg-white border-y border-x-0 border-solid border-gray-200">
					<template v-for="(item, index) in taskList" :key="index">
						<task-list-item :task="item"></task-list-item>
					</template>
				</view>
			</template>
		</collapse-item>

		<course-tabbar :activeTab="2"></course-tabbar>
	</view>
</template>

<script setup>
	import {
		onLoad,
		onReady
	} from '@dcloudio/uni-app'
	import {
		reactive
	} from "vue";

	onLoad((option) => {
		console.log(option.id);
	})

	const taskList = reactive([{
			name: '定时任务练习 (一)',
			score: 10,
			member: 24,
			status: 2,
			cover: '/static/logo.png',
			joinStatus: 0
		},
		{
			name: '定时任务练习 (二)',
			score: 10,
			member: 26,
			status: 0,
			cover: '/static/logo.png',
			joinStatus: 1
		},
		{
			name: '你对定时任务的理解 (三)',
			score: 10,
			member: 27,
			status: 1,
			cover: '/static/logo.png',
			joinStatus: 2
		},
		{
			name: '日志框架 (四)',
			score: 100,
			member: 24,
			status: 0,
			cover: '/static/logo.png',
			joinStatus: 0
		}
	])

	const navBack = () => {
		uni.switchTab({
			url: '/pages/index/index'
		})
	}
</script>

<style scoped>

</style>