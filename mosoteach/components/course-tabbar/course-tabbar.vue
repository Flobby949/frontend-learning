<template>
	<view class="flex justify-around py-2 fixed bottom-0 w-screen z-10 h-12 border">
		<view v-for="(item,index) in tabs" :key="index">
			<view class="flex flex-col justify-center items-center h-full"
				:class="[activeTab === index ? 'text-[#00bbdd]' : 'text-black']" @click="changeTab(index)">
				<view class="iconfont" :class="[activeTab === index ? item.activeIcon : item.icon]"></view>
				<view class="">
					{{item.title}}
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		reactive
	} from "vue";

	defineProps({
		activeTab: {
			type: Number,
			default: 0
		}
	})

	const tabs = reactive([{
			title: '资源',
			icon: 'icon-resource',
			activeIcon: 'icon-resource-active text-[#00bbdd] !important',
			url: '/pages/course/resource'
		},
		{
			title: '成员',
			icon: 'icon-member',
			activeIcon: 'icon-member-active text-[#00bbdd]',
			url: '/pages/course/member'
		},
		{
			title: '活动',
			icon: 'icon-task',
			activeIcon: 'icon-task-active text-[#00bbdd]',
			url: '/pages/course/course-task-all'
		},
		{
			title: '消息',
			icon: 'icon-message',
			activeIcon: 'icon-message-active text-[#00bbdd]',
			url: '/pages/course/message'
		},
		{
			title: '详情',
			icon: 'icon-detail',
			activeIcon: 'icon-detail-active text-[#00bbdd]',
			url: '/pages/course/detail'
		},
	])

	const changeTab = (index) => {
		uni.navigateTo({
			url: tabs[index].url
		})
	}
</script>

<style scoped>

</style>