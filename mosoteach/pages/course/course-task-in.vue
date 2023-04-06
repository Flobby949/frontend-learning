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
		<switch-tab-card :activeTab="1" :taskCount="[1,1,1]"></switch-tab-card>
		<course-tabbar :activeTab="2"></course-tabbar>
	</view>
</template>

<script setup>
	const navBack = () => {
		uni.switchTab({
			url: '/pages/index/index'
		})
	}
</script>

<style scoped>

</style>
