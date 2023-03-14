<template>
	<view>
		<!-- 手机顶部状态栏 -->
		<uni-status-bar></uni-status-bar>

		<!-- 条件编译-导航栏 -->
		// #ifdef APP-PLUS
		<view class="flex-row justify-between pb-1 bg-light" id="nav-bar"
			:style="{width: screenWidth + 'px', height: navBarHeight +'px'}">
			<view>
				<text class="text-info font-weight-bold mx-1 label">
					我创建的
				</text>
				<text class="text-dark font-weight-bold mx-2">
					我加入的
				</text>
				<text class="text-dark font-weight-bol">
					我共建的
				</text>
			</view>
			<view class="text-info">
				<text class="iconfont-lg icon-add"></text>
				<text class="iconfont-lg icon-code mx-2"></text>
			</view>
		</view>
		// #endif

		// #ifdef MP-WEIXIN
		<view class=" flex-row align-center justify-start pb-1 bg-light" id="nav-bar"
			:style="{width: (screenWidth - buttonWidth) + 'px', height: navBarHeight +'px'}">
			<view>
				<text class="text-info font-weight-bold mx-1 label">我创建的</text>
				<text class="text-dark font-weight-bold">我加入的</text>
				<text class="text-dark font-weight-bold mx-1">我共建的</text>
			</view>
			<view class="text-info">
				<text class="iconfont-lg icon-add mx-2"></text>
			</view>
		</view>
		// #endif

		<!-- 搜索框，左右结构 -->
		<view class="flex my-2 px-2">
			<view class="position-relative border flex-5">
				<view class="search-icon text-light-muted justify-center align-center">
					<text class="iconfont icon-search"></text>
				</view>
				<input type="text" placeholder="搜索" class="search-box">
			</view>
		</view>

		<!-- 主体内容，渲染班课数组 -->
		<view class="border-bottom bg-white mb-2" v-for="(course, index) in courses" :key="index" :index="index">
			<view class="text-dark h4 font-weight-bold p-2">
				{{course.courseName}}
			</view>
			<view class="flex px-2">
				<view class="flex-1">
					<image src="course.cover"></image>
				</view>
				<view class="flex-4">
					
					
					<view class="mt-2">
						<text class="text-muted mr-2">{{course.}}</text>
						<text class="text-info">{{course.no}}</text>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	import {
		onLoad,
		onReady
	} from '@dcloudio/uni-app'

	let navBarHeight = ref(Number)
	let buttonWidth = ref(Number)
	let screenWidth = ref(Number)

	// #ifdef APP-PLUS
	onReady(() => {
		console.log("Page Init");
		screenWidth = uni.getSystemInfoSync().screenWidth
		console.log("屏幕宽度:" + screenWidth);
		let info = uni.createSelectorQuery().select("#nav-bar")
		info.boundingClientRect((data) => {
			console.log("导航高度：" + data.height)
			navBarHeight = data.height
		}).exec()
	})
	// #endif

	// #ifdef MP-WEIXIN
	onLoad(() => {
		console.log("微信小程序初始化");
		screenWidth = wx.getSystemInfoSync().screenWidth
		console.log("屏幕宽度:" + screenWidth)
		buttonWidth = wx.getMenuButtonBoundingClientRect().width
		console.log("胶囊宽度:" + buttonWidth)
		let info = uni.createSelectorQuery().select("#nav-bar")
		info.boundingClientRect((data) => {
			console.log("导航高度：" + data.height)
			navBarHeight = data.height
		}).exec()
	})
	// #endif
</script>

<style>

</style>
