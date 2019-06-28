<template>
	<div>
		关于
		<canvas id="canvas"></canvas>

		<div id="menu">
			<!-- <button id="pop" onClick="popf()">吸收/排斥</button> -->
			
			<div style="color:white;margin-bottom: 10%;">
					<div class="div11">
						本博客网站使用HTML、CSS、JavaScript、jQuery、layUI、Java语言、SSM框架、Redis、软件构件工具Maven、版本控制工具Git。本博客网站还在继续开发中，更多功能会继续更新，本网站从前端到后端，由本人独立完成。
					</div>
					<div class="div12">
						<font size="40px;">个人简介</font><br/>
						姓名：李贤元<br/>
						本科于2018年6月底毕业于太原科技大学软件工程专业
						<br/>
						Github: &nbsp;https://github.com/lixianSharp
						<br/>
						微信公众号名称: &nbsp;李贤元个人公众号 
						<br/>
						博客园: https://www.cnblogs.com/lixianyuan-org/
						<br/>
						邮箱: &nbsp;xianyuan_li@qq.com
					</div>
			</div>
		</div>

	</div>
</template>

<script>
	//import './index2.js'
	export default{
		name: "About"
	}
</script>

<style>
	.div11{
	margin-left: 20%;margin-right: 20%;margin-top:10%;font-size: 25px;
	}

.div12{
	margin-left: 20%;margin-right: 20%;margin-top:5%;font-size: 25px;margin-bottom: 10%;
	}
	body{
  background: #333;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
}
#menu{
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 9;
}

#pop{
  border: none;
  padding: 10px 20px;
  background: #fff;
}
#pop:hover{
  background: #ddd;
  cursor: pointer;
}
</style>