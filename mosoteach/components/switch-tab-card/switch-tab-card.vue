<template>
	<view class="flex fixed w-screen top-[88px] bg-white z-10">
		<template v-for="(item,index) in switchTabs" :key="index">
			<view @click="checkTab(index)"
			class="flex flex-col flex-1 flex-grow justify-center items-center border-x-0 border-t-0 border-b-2 border-solid" 
			:class="activeTab === index ? 'border-[#00bbdd] text-[#00bbdd]' : 'border-white'">
				<text>{{item.title}}</text>
				<text>{{taskCount[index]}}</text>
			</view>
		</template>
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
		},
		taskCount: {
			type: Array,
			default: [0, 0, 0]
		}
	})

	const switchTabs = reactive([
		{
			title: '开始',
			url: '/pages/course/course-task-all'
		},
		{
			title: '进行中',
			url: '/pages/course/course-task-in'
		},
		{
			title: '已结束',
			url: '/pages/course/course-task-finish'
		},
	])
	
	const checkTab = (index) => {
		uni.navigateTo({
			url: switchTabs[index].url
		})
	}
</script>

<style scoped>

</style>