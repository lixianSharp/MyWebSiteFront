<template>
	<div class='firstHead'>
		<el-row :gutter="20">
			<el-col :span="24">
				<div class="grid-content bg-purple">
					<header-page></header-page>
				</div>
			</el-col>
			<!--<el-col :span="8">
				<div class="grid-content bg-purple"></div>
			</el-col>-->
		</el-row>
		<el-row :gutter="20">
			<el-col :span="24">    
				<carousel-page :swiperList="swiperList"></carousel-page>
			</el-col>
			<!--<el-col :span="8">
				<div class="grid-content bg-purple"></div>
			</el-col>-->
		</el-row>
		<el-row :gutter="20">
			<el-col :span="24">
				<div class="grid-content bg-purple">
					这个世界上有很多事情，你以为明天一定可以再继续做的； 有很多人，你以为明天一定可以再见到面的； 于是，在你暂时放下先或者暂时转过身的时候，你心中所有的，只是明日又将重聚的希望，有时候甚至连这点希望也不会感觉到。 因为，你以为日子既然这样一天一天地过来的，当然也应该就这样一天一天地过去。 昨天、今天和明天应该是没有什么不同的。 但是，就会有那么一次：在你一放手，一转身的那一刹那，有的事情就完全改变了。 太阳落下去，而在它重新升起以前，有些人，就从此和你永诀了。
				</div>
			</el-col>
			<!--<el-col :span="8">
				<div class="grid-content bg-purple"></div>
			</el-col>-->
		</el-row>
		<el-row :gutter="20">
			<el-col :span="8">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple"></div>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="24">
				<div class="grid-content bg-purple"></div>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="24">
				<div class="grid-content bg-purple">
					<footer-page></footer-page>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import CarouselPage from '@/components/front/carousel/Carousel'
	import HeaderPage from '@/components/front/header/Header'
	import FooterPage from '@/components/front/footer/Footer'
	import LeaveMsg from '@/components/front/leavemsg/LeaveMsg'
	import axios from 'axios'

	export default {
		name: "FIndex",
		data() {
			return {
				swiperList: []
			}
		},
		components: {
			CarouselPage,
			HeaderPage,
			FooterPage,
			LeaveMsg
		},
		methods: {
			getImgsInfo() {
				//将轮播图中的数据取出来
				axios.get('/static/images.json').then(this.getPicInfoSucc);
			},
			getPicInfoSucc(res) {
				//res.data代表index.json中的全部数据
				res = res.data;
				if(res.ret && res.data) {
					const data = res.data; //获取images.json中key=“data”的数据
					this.swiperList = data.swiperList; //获取data中的key=swiperList的数
					console.log(this.swiperList);
				}

			}
		},
		mounted() {
			this.getImgsInfo();
		}
	}
</script>

<style>
	.el-row {
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-col {
		border-radius: 4px;
	}
	
	.bg-purple-dark {
		background: #99a9bf;
	}
	
	.bg-purple {
		background: #d3dce6;
	}
	
	.bg-purple-light {
		background: #e5e9f2;
	}
	
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
	
	.firstHead{
		background-color: #E5E9F2;
	}
</style>