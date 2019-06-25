<template>
	<div>
		<el-carousel :interval="3000" type="card" height="600px" :autoplay="true" :loop="true">
			<el-carousel-item v-for="(item,id) in swiperList" :key="id">
				<img class="imgClass" :src="item.imgUrl" />
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
	export default {
		name: "Carousel",
		props: {
			swiperList: Array
		},
		components: {},
		data() {
			return {
			}
		},

	}
</script>

<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  
  .imgClass{
  	height: 100%;
  	width: 100%;
  }
</style>