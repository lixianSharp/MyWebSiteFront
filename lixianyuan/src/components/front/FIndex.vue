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
					<font size="4" color="#00CDCD">
						<b>
					这个世界上有很多事情，你以为明天一定可以再继续做的； 有很多人，你以为明天一定可以再见到面的； 于是，在你暂时放下先或者暂时转过身的时候，你心中所有的，只是明日又将重聚的希望，有时候甚至连这点希望也不会感觉到。 因为，你以为日子既然这样一天一天地过来的，当然也应该就这样一天一天地过去。 昨天、今天和明天应该是没有什么不同的。 但是，就会有那么一次：在你一放手，一转身的那一刹那，有的事情就完全改变了。 太阳落下去，而在它重新升起以前，有些人，就从此和你永诀了。
						</b>
					</font>
				</div>
			</el-col>
			<!--<el-col :span="8">
				<div class="grid-content bg-purple"></div>
			</el-col>-->
		</el-row>
		<el-row :gutter="20">
			<el-col :span="8">
				<div class="grid-content bg-purple">
					<font size="4" color="#1E90FF">
						<b>
					不要因为也许会改变就不肯说那句美丽的誓言；不要因为也许会分离就不敢求一次倾心的相遇。 --席慕蓉 《印记》
					</b>
					</font>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple">
					<font size="4" color="#87CEFA">
						<b>
					在一回首间，才忽然发现，原来，我一生的种种努力，不过只为了周遭的人对我满意而已。为了搏得他人的称许与微笑，我战战兢兢地将自己套入所有的模式所有的桎梏。走到途中才忽然发现，我只剩下一副模糊的面目，和一条不能回头的路 --席慕蓉《独白》
					</b>
					</font>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple">
					<font size="4" color="#00FF7F">
						<b>
					我喜欢回顾，是因为我不喜欢忘记。我总认为，在世间，有些人、有些事、有些时刻似乎都有一种特定的安排，在当时也许不觉得，但是在以后回想起来，却都有一种深意。我有过许多美丽的时刻，实在舍不得将它们忘记。 --席慕容 《透明的哀伤》
					</b>
					</font>
				</div>
			</el-col>
		</el-row>
		<!--<el-row :gutter="20">
			<el-col :span="24">
				<div class="grid-content bg-purple"></div>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="24">
				<div class="grid-content bg-purple">
					<footer-page></footer-page>
				</div>
			</el-col>-->
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
		/*background: #B3D8FF;*/
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
		background-image: url(http://www.lixianyuan.org/frontPage/images/index/4.jpg);
	}
</style>