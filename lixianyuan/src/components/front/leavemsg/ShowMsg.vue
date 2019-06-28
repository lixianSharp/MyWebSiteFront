<template>
	<div>
		<el-row  v-for="(item,id) in leaveMsgList" :key="id">
			<el-button type="primary" round>
				<i class="el-icon-user-solid"></i>
				{{item.name}}
				<i class="el-icon-timer"></i>
				{{item.leaveTime}} &nbsp; 留言: &nbsp;{{item.content}}
			</el-button>
			<br /><br />
			<!--<el-button type="success" round>成功按钮</el-button>
			<el-button type="info" round>信息按钮</el-button>
			<el-button type="warning" round>警告按钮</el-button>
			<el-button type="danger" round>危险按钮</el-button>-->
		</el-row>
		<!--分页条-->
		<div class="block">
		    <!--<span class="demonstration">完整功能</span>-->
		    <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      @prev-click="handlePreClick"
		      @next-click="handleNextClick"
		      :current-page="currentPage4"
		      :page-sizes="[10, 20, 30, 40]"
		      :page-size="100"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="totalRecords">
		    </el-pagination>
		 </div>
	</div>
</template>

<script>
	import axios from 'axios'
	import QS from 'qs'
	export default {
		name: 'ShowMsg',
		data() {
			return {
		        currentPage4: 0, //表示当前页页号
		        totalRecords: 0,//表示总记录数,让其初始值为0
		        leaveMsgList: [],
		        currentPage: 1, //当前页页号，让其初始值为1
		        currentSize: 10, //每页显示的记录数，让其初始值为10
		    };
		},
		methods:{
			//查询所有留言;curPage表示当前页页号，curSize表示每页显示的记录数(每页显示多少条)
			findAllLeaveMsg(curPage,curSize) {
				//注意：一个坑：在 then的内部不能使用Vue的实例化的this, 因为在内部 this 没有被绑定。解决方式：在请求axios外面定义一下 var that=this 
				var that=this;
				let leavemsg = {
					"currentPage": curPage,
					"currentSize": curSize
				}
				
				axios.post('/after/findLeaveMsg', QS.stringify(leavemsg), {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded'
						}
					})
					.then(function(response) {
						//注意：一个坑：在 then的内部不能使用Vue的实例化的this, 因为在内部 this 没有被绑定。解决方式：在请求axios外面定义一下 var that=this 
						console.log(response);
						//取出需要的返回结果中的数据
						console.log(response.data);
						//取出返回的整个数据，也就是Map<String,Object>
						var mydate = response.data;
						that.leaveMsgList=mydate.leaveMsgList;
						that.totalRecords = mydate.totalRecords;

					})
					.catch(function(err) {
						console.log(err);
					});
			},
			handleSizeChange(val) {
				//pageSize 改变时会触发。参数表示每页显示的记录数
	        	console.log('每页 ${val} 条'+val);
	        	//修改每页显示的记录数
	        	this.currentSize = val;
	        	
	        	//刷新页面数据
	        	this.findAllLeaveMsg(this.currentPage,this.currentSize);
		     },
		    handleCurrentChange(val) {
		    	//currentPage 改变时会触发。参数表示当前页页号
		       // console.log('当前页: ${val}'+val);
		        //修改当前页页号
		        this.currentPage = val;
		        //刷新页面数据
	        	this.findAllLeaveMsg(this.currentPage,this.currentSize);
		    },
		    handlePreClick(val){
		    	//用户点击上一页按钮改变当前页后触发。参数表示当前页页号
		    	//console.log("点击了前一页");
		    	//修改当前页页号
		        this.currentPage = val;
		        //刷新页面数据
	        	this.findAllLeaveMsg(this.currentPage,this.currentSize);
		    },
		    handleNextClick(val){
		    	//用户点击下一页按钮改变当前页后触发。参数表示当前页页号
		    	//console.log("点击了后一页");
		    	//修改当前页页号
		        this.currentPage = val;
		        //刷新页面数据
	        	this.findAllLeaveMsg(this.currentPage,this.currentSize);
		    },
			 
		},
		mounted(){
			//页面初始化的时候会执行这个方法
			this.findAllLeaveMsg(this.currentPage,this.currentSize);
		}
	}
</script>

<style>

</style>