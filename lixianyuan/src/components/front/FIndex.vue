<template>
	<div>
		前端首页
		<carousel-page :swiperList="swiperList"></carousel-page>
	</div>
</template>

<script>
	import CarouselPage from '@/components/front/carousel/Carousel'
	import axios from 'axios'

	export default {
		name: "FIndex",
		data(){
			return{
				swiperList:[]
			}
		},
		components: {
			CarouselPage
		},
		methods: {
			getImgsInfo(){
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
		mounted(){
			this.getImgsInfo();
		}
	}
</script>

<style>

</style>