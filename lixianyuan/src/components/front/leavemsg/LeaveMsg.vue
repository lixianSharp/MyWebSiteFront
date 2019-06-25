<template>
	<div>
		<el-form :model="ruleForm" status-icon :rules="rules"  ref="ruleForm" label-width="100px" class="demo-ruleForm formClass" >
			<el-form-item label="您的姓名" prop="name">
				<el-input type="text" v-model.trim="ruleForm.name" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="您的邮箱" prop="email">
				<el-input type="text" v-model.trim="ruleForm.email" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="留言内容" prop="content">
				<el-input v-model.trim="ruleForm.content"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
	import axios from 'axios'
	import QS from 'qs'
	export default {
		name: "LeaveMsg",
		data() {
			//校验姓名
			var validatePass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入姓名'));
				} else {
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
				if(value === '') {
					callback(new Error('请输入邮箱'));
				}
				setTimeout(() => {
					if(mailReg.test(value)) {
						callback()
					} else {
						callback(new Error("请输入正确的邮箱格式"))
					}
				}, 100);

			};
			var checkMsg = (rule, value, callback) => {
				if(!value) {
					return callback(new Error('留言内容不能为空'));
				} else {
					callback();
				}
			};
			return {
				ruleForm: {
					name: '',
					email: '',
					content: ''
				},
				rules: {
					name: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					email: [{
						validator: validatePass2,
						trigger: 'blur'
					}],
					content: [{
						validator: checkMsg,
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			submitForm(formName) {
				let leavemsg = {
					"name": this.ruleForm.name,
					"email": this.ruleForm.email,
					"content": this.ruleForm.content
				}
				//如果表单通过校验，则提交表单
				this.$refs[formName].validate((valid) => {
					if(valid) {
						alert('submit!');
						alert(this.ruleForm.name+"->"+this.ruleForm.email+"->"+this.ruleForm.content)
						//		<!-- axios的表单提交,Content-Type默认为application/json;charset=UTF-8 -->
						axios.post('/after/addLeaveMsg', QS.stringify(leavemsg), {
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
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				//重置表单
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style>
	.formClass{
		width: 40%;
		margin-left: 25%;
		margin-right: 25%;
	}
</style>