<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>Essential Links</h2>
		<el-button type="primary" @click="visible = true">Button</el-button>
		<el-dialog :visible.sync="visible" title="Hello world">
			<p>Try Element</p>
		</el-dialog>
		<br><br>
		<el-button type="primary" @click="getRequest">Get测试</el-button>
		<el-button type="primary" @click="postRequest">Post测试</el-button>
		<el-button type="primary" @click="toFront">跳转到前台首页</el-button>
		<el-button type="primary" @click="toAfter">跳转到后台首页</el-button>
		<h2>Ecosystem</h2>
		<router-link to="/front">跳转到前台首页</router-link>
		<router-link to="/front/mindex">跳转到后台首页</router-link>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				visible: false
			}
		},
		methods: {
			getRequest() {
				//发送get请求
				axios.get('/after/hello/hello')
					.then(function(response) {
						console.log(response);
					})
					.catch(function(err) {
						console.log(err)
					});
			},
			postRequest() {
				//		<!-- axios的表单提交,Content-Type默认为application/json;charset=UTF-8 -->
				axios.post('/after/hello/test', {
						firstName: 'Fred',
						lastName: 'Flintstone'
					}, {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded'
						}
					})
					.then(function(response) {
						console.log(response);
					})
					.catch(function(err) {
						console.log(err);
					});
			},
			toFront(){
				this.$router.push("/findex");
			},
			toAfter(){
				this.$router.push("/mindex");
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
</style>