<template>
	<view class="content">
		<view v-for="(item,index) in courses">
			<view class="course-item">
				<view class="cover">
					<image :src="item.cover" class="cover-img">
				</view>
				<view class="info-area">
					<view class="course-name">
						{{ item.name }}
					</view>
					<view class="teacher-info">
						<view class="meta">{{item.teacherName}}</view>
						<view class="meta gary-text">{{item.className}}</view>
					</view>
					<view class="operator-bar">
						<view class="item" v-for="(item,index) in operatorList">
							<view class="icon">
								{{item.icon}}
							</view>
							<view class="des">
								{{item.des}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				courses: [{
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
				],
				operatorList: [
					{
						icon: '>',
						des: '签到'
					},
					{
						icon: '=',
						des: '举手'
					},
					{
						icon: '<',
						des: '抢答'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			// hover(course) {
			// 	course.show = true
			// },
			// leave(course) {
			// 	course.show = false
			// },
		}
	}
</script>

<style lang="scss">
	* {
		box-sizing: border-box;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
		.course-item {
			display: flex;
			flex-direction: row;
			min-height: 200rpx;
			width: 100vw;
			border-bottom: 0.5rpx solid #d3d3d3;
			
			.cover {
				height: 200rpx;
				width: 200rpx;
				padding: 20rpx;
				.cover-img{
					width: 100%;
					height: 100%;
					border-radius: 8rpx;
				}
			}
			.info-area{
				flex: 1;
				padding: 20rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				
				.course-name {
					font-weight: 700;
					font-size: 36rpx;
				}
				.teacher-info {
					align-items: center;
					width: 400rpx;
					justify-content: space-between;
					display: flex;
					flex-direction: row;
					flex-wrap: nowrap;
					flex: 1;
					
					.meta {
						white-space: nowrap;
						max-width: 250rpx;
						overflow: hidden;
						text-overflow: ellipsis;
					}
					
					.gary-text {
						color: #808080;
					}
				}
				
				.operator-bar {
					justify-content: space-between;
					display: flex;
					flex-direction: row;
					flex-wrap: nowrap;
					
					.item {
						width: 120rpx;
						line-height: 55rpx;
						display: flex;
						flex-direction: row;
						align-items: center;
						
						.icon {
							border-radius: 50%;
							width: 40rpx;
							height: 40rpx;
							background-color: #cccccc;
							line-height: 40rpx;
							text-align: center;
						}
						
						.des {
							padding: 0 10rpx;
							font-size: 28rpx;
							color: #393939;
						}
					}
				}
			}

		}
	}

</style>
