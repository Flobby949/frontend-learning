<template>
	<!-- 手机顶部状态栏 -->
	<uni-status-bar class="fixed-top"></uni-status-bar>
	<view class="my">
		<view class="flex align-center border-bottom pb-1">
			<view class="image flex-1">
				<image
					src="https://public-cdn-oss.mosoteach.cn/avatar/2019/4C/3117093603a057f6bf0e5dd65aa5b8ff.jpg?v=1676265419&x-oss-process=style/s300x300"
					class="ml-5"></image>
			</view>
			<view class="flex-4">
				<view class="pl-5">
					<view class="font-md">金晨星</view>
				</view>
			</view>

			<view class="flex-1">
				<view class="text-right iconfont icon-right "></view>
			</view>
		</view>

		<view class="flex align-center f-around p-2 border">
			<view class="flex-1 flex align-center flex-column border-right">
				<view class="text-info">8045</view>
				<view>经验值</view>
			</view>
			<view class="flex-1 flex align-center flex-column border-right">
				<view class="text-info">0</view>
				<view>魅力值</view>
			</view>
			<view class="flex-1 flex align-center flex-column border-right">
				<view class="text-info">20</view>
				<view>蓝豆</view>
			</view>
			<view class="flex-1 flex align-center flex-column">
				<view class="text-info">8</view>
				<view>心意</view>
			</view>
		</view>

		<view class="list flex p-2 mt-3 border-top border-bottom justify-center align-center">
			<view class="flex flex-column align-center flex-1" v-for="(item,index) in list">
				<image :src="item.url"></image>
				<text>{{item.name}}</text>
			</view>
		</view>

		<view class="list p-3 mt-3 border-top border-bottom">
			<view class="flex align-center justify-between">
				<view>我的勋章</view>
				<view class="text-muted">查看所有勋章
					<text class="iconfont icon-right-arrow"></text>
				</view>
			</view>
			<view class="flex align-center f-around mt-3 text-center font-sm font-weight-bold">
				<template v-for="(item, index) in medal">
					<view class="flex-1">
						<image :src="item.url"></image>
						<view>
							{{item.name}}
						</view>
					</view>
				</template>
			</view>
		</view>

		<view class="mt-4">
			<view v-for="(it,index) in item" :key="index" class="">
				<view class="flex justify-between border p-2 align-center">
					<view>
						{{it.title}}
					</view>
					<view v-if="it.name">
						<text class="ml-5 font-sm text-dark">{{it.name}}</text>
					</view>
					<view class="iconfont icon-right-arrow">

					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";

	const item = ref([{
			title: "文件暂存区"
		},
		{
			title: "分享给朋友"
		},
		{
			title: "用户协议"
		},
		{
			title: "隐私政策"
		},
		{
			title: "设置"
		}
	])

	const list = ref([{
			name: "我的空间",
			url: "../../static/images/_fP.png"
		}, {
			name: "我的收藏",
			url: "../../static/images/vme.png"
		},
		{
			name: "心意卡片",
			url: "../../static/images/ypf.png"
		},
		{
			name: "任务中心",
			url: "../../static/images/CTz.png"
		},
		{
			name: "系统消息",
			url: "../../static/images/ijI.png"
		}
	])

	const medal = ref([{
			name: "求知若渴",
			url: "../../static/images/111.png"
		}, {
			name: "助人为乐",
			url: "../../static/images/222.png"
		},
		{
			name: "铁杵",
			url: "../../static/images/333.png"
		},
		{
			name: "脑洞大开",
			url: "../../static/images/444.png"
		}
	])
</script>

<style lang="scss" scoped>
	.image image {
		height: 60px;
		width: 60px;
		border-radius: 12px;
	}

	.list image {
		height: 44px;
		width: 44px;
	}

	.my {
		margin-top: 84px;
	}
</style>
