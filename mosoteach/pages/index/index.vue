<template>
	<view>
		<!-- 手机顶部状态栏 -->
		<uni-status-bar class="fixed-top"></uni-status-bar>

		<!-- 条件编译-导航栏 -->
		// #ifdef APP-PLUS
		<view class="flex justify-between pb-1 bg-light fixed-top" id="nav-bar"
			:style="{width: screenWidth + 'px'}">
			<view>
				<text class="text-info font-weight-bold mx-1 active">
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
		<view class="flex justify-start pb-1 bg-light fixed-top" id="nav-bar"
			:style="{width: (screenWidth - buttonWidth) + 'px'}">
			<view>
				<text class="text-info font-weight-bold mx-1 active">我创建的</text>
				<text class="text-dark font-weight-bold">我加入的</text>
				<text class="text-dark font-weight-bold mx-1">我共建的</text>
			</view>
			<view class="text-info">
				<text class="text-dark">···</text>
			</view>
		</view>
		// #endif

		<!-- 搜索框，左右结构 -->
		<view class="flex my-2 px-2 search">
			<view class="position-relative border flex-5">
				<view class="search-icon text-light-muted flex justify-center align-center">
					<text class="iconfont icon-search"></text>
				</view>
				<input type="text" placeholder="搜索" class="search-box">
			</view>
			<view class="flex-1 text-info font-weight-bold justify-center align-center flex">调序</view>
		</view>

		<!-- 主体内容，渲染班课数组 -->
		<view class="border-bottom bg-white mb-2" v-for="(course, index) in courses" :key="index" :index="index">
			<view class="text-dark h4 font-weight-bold p-2">
				{{course.name}}
			</view>
			<view class="flex px-2">
				<view class="flex-1">
					<image :src="course.cover" class="thumbnail"></image>
				</view>
				
				<view class="flex-4 ml-2">
					<view>
						<text>{{course.className}}</text>
					</view>
					<view class="mt-2">
						<text class="text-muted mr-2">{{course.time}}</text>
						<text class="text-info">{{course.no}}</text>
					</view>
				</view>
				
				<view class="flex-1 text-right">
					<text class="iconfont icon-right-arrow text-muted"></text>
				</view>
			</view>
			
			<view class="p-2 flex justify-between text-center text-muted">
				<view>
					<view class="iconfont icon-check"></view>
					<view class="font-sm mt-1">签到</view>
				</view>
				<view>
					<view class="iconfont icon-check"></view>
					<view class="font-sm mt-1">签到</view>
				</view>
				<view>
					<view class="iconfont icon-check"></view>
					<view class="font-sm mt-1">签到</view>
				</view>
				<view>
					<view class="iconfont icon-check"></view>
					<view class="font-sm mt-1">签到</view>
				</view>
				<view>
					<view class="iconfont icon-check"></view>
					<view class="font-sm mt-1">签到</view>
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
	
	let courses = reactive(
				[
					{
						name: '后端工程化开发',
						cover: 'https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/e81eb0929b869d2098cb441da709ae66.jpeg',
						avatar: 'https://public-cdn-oss.mosoteach.cn/avatar/2020/01/a2f12c73eed9ee74b87f8f05865a8d3b.jpg',
						teacherName: '许莫淇',
						isClose: false,
						no: '111111',
						time: '2023/3 - 2023/6',
						className: '软件2242 Web 2班',
						show: false
					},
					{
						name: '前端工程化开发',
						cover: 'https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/effaea97669cecb86c6b9e9d2dce54cd.jpg',
						avatar: 'https://public-cdn-oss.mosoteach.cn/avatar/2020/01/a2f12c73eed9ee74b87f8f05865a8d3b.jpg',
						teacherName: '许莫淇',
						isClose: false,
						no: '222222',
						time: '2023/3 - 2023/6',
						className: '软件2242 Web 2班',
						show: false
					},
					{
						name: 'Web应用开发',
						cover: 'https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/319aa0a5a02386312000d5df99aa1a9d.jpeg',
						avatar: 'https://public-cdn-oss.mosoteach.cn/avatar/2020/01/a2f12c73eed9ee74b87f8f05865a8d3b.jpg',
						teacherName: '许莫淇',
						isClose: true,
						no: '333333',
						time: '2023/2 - 2023/3',
						className: '软件2242 Web 2班',
						show: false
					},
					{
						name: '后端工程化开发',
						cover: 'https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/e81eb0929b869d2098cb441da709ae66.jpeg',
						avatar: 'https://public-cdn-oss.mosoteach.cn/avatar/2020/01/a2f12c73eed9ee74b87f8f05865a8d3b.jpg',
						teacherName: '许莫淇',
						isClose: false,
						no: '111111',
						time: '2023/3 - 2023/6',
						className: '软件2242 Web 2班',
						show: false
					},
					{
						name: '前端工程化开发',
						cover: 'https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/effaea97669cecb86c6b9e9d2dce54cd.jpg',
						avatar: 'https://public-cdn-oss.mosoteach.cn/avatar/2020/01/a2f12c73eed9ee74b87f8f05865a8d3b.jpg',
						teacherName: '许莫淇',
						isClose: false,
						no: '222222',
						time: '2023/3 - 2023/6',
						className: '软件2242 Web 2班',
						show: false
					},
					{
						name: 'Web应用开发',
						cover: 'https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/319aa0a5a02386312000d5df99aa1a9d.jpeg',
						avatar: 'https://public-cdn-oss.mosoteach.cn/avatar/2020/01/a2f12c73eed9ee74b87f8f05865a8d3b.jpg',
						teacherName: '许莫淇',
						isClose: true,
						no: '333333',
						time: '2023/2 - 2023/3',
						className: '软件2242 Web 2班',
						show: false
					}
				]
	)

	// #ifdef APP-PLUS
	onReady(() => {
		console.log("Page Init");
		screenWidth = uni.getSystemInfoSync().screenWidth
		console.log("屏幕宽度:" + screenWidth);
	})
	// #endif

	
	// #ifdef MP-WEIXIN
	onLoad(() => {
		console.log("微信小程序初始化");
		screenWidth = wx.getSystemInfoSync().screenWidth
		console.log("屏幕宽度:" + screenWidth)
		buttonWidth = wx.getMenuButtonBoundingClientRect().width
		console.log("胶囊宽度:" + buttonWidth)
	})
	// #endif
</script>

<style scoped>
	#nav-bar{
		height: 44px;
		margin-top: 44px;
	}
	
	.active {
		position: relative;
	}
	
	.active::after {
		content: '';
		position: absolute;
		top: 55rpx;
		left: 40rpx;
		width: 50rpx;
		height: 6rpx;
		background-color: var(--info)
	}
	
	.search-icon {
		width: 70rpx;
		height: 70rpx;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.search-box {
		height: 70rpx;
		padding-left: 70rpx;
		background-color: var(--bgColor);
		border-radius: var(--radius);
	}
	
	.thumbnail {
		width: 110rpx;
		height: 110rpx;
		border-radius: var(--radius);
	}
	
	.search {
		margin-top: 104px;
	}
</style>
