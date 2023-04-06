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
		
		<course-tabbar :activeTab="4"></course-tabbar>
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
