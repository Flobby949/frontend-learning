<template>
	<view class="box-border pt-[80px] bg-gray-50 h-screen">
		<uni-nav-bar title="发现">
			// #ifdef APP-PLUS
			<template v-slot:right>
				帮助
			</template>
			// #endif
		</uni-nav-bar>
		<view class="my-6 divide-y divide-gray-200 divide-x-0 divide-solid bg-white border-y border-x-0 border-solid border-gray-200">
			<uni-list-item title="课程圈" :showIcon="true">
				<template v-slot:icon>
					<image src="../../static/images/public_course_icon.png" class="w-7 h-7"></image>
				</template>
			</uni-list-item>
			<uni-list-item title="公开课"></uni-list-item>
		</view>
		<view class="divide-y divide-gray-200 divide-x-0 divide-solid bg-white border-y border-x-0 border-solid border-gray-200">
			<uni-list-item title="云教材"></uni-list-item>
			<uni-list-item title="书香中国"></uni-list-item>
		</view>
	</view>
</template>

<script setup>

</script>

<style scoped>

</style>