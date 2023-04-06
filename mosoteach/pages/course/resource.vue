<template>
	<view class="box-border">
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

		<collapse-item class="mt-24" title="资源" :count="5">
			<template v-slot:content>
				<view
					class="divide-y divide-gray-200 divide-x-0 divide-solid bg-white border-y border-x-0 border-solid border-gray-200">
					<template v-for="(item, index) in resourceList" :key="index">
						<resource-list-item :resource="item"></resource-list-item>
					</template>
				</view>
			</template>
		</collapse-item>

		<course-tabbar :activeTab="0"></course-tabbar>
	</view>
</template>

<script setup>
	import {
		reactive
	} from "vue";
	const navBack = () => {
		uni.switchTab({
			url: '/pages/index/index'
		})
	}

	const resourceList = reactive([{
			name: '计数器练习',
			size: '108KB',
			time: '03.14 10:09',
			score: 3,
			type: 1,
			cover: '/static/logo.png',
			download: true,
			watchCount: 30
		},
		{
			name: '史上最全 Vue 前端代码风格指南',
			size: '108KB',
			time: '03.14 10:09',
			score: 3,
			type: 1,
			cover: '/static/logo.png',
			download: true,
			watchCount: 30
		},
		{
			name: 'uni-app 说明 (上)',
			size: '108KB',
			time: '03.14 10:09',
			score: 3,
			type: 0,
			cover: '/static/logo.png',
			download: false,
			watchCount: 30,
			des: 'uni-app 说明 (上)'
		},
		{
			name: 'Vue3新特性(1)-李涛',
			size: '108KB',
			time: '03.14 10:09',
			score: 10,
			type: 0,
			cover: '/static/logo.png',
			download: true,
			watchCount: 30
		},
		{
			name: 'render自动集成部署',
			size: '108KB',
			time: '03.14 10:09',
			score: 3,
			type: 0,
			cover: '/static/logo.png',
			download: true,
			watchCount: 30,
			des: 'render自动集成部署——金晨星'
		}
	])
</script>

<style scoped>

</style>