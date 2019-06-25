<template>
	<div>
		<nav id="topnav">
			<ul>
				<a href="/index.jsp" target="_self">网站首页</a>
				<a href="/frontPage/ydyblogMenu/rightShow.jsp" target="_self">博客/笔记分享</a>
				<a href="/frontPage/xysy.jsp" target="_self">闲言碎语</a>

				<a href="/frontPage/studyResource.jsp" target="_self">学习资源分享</a>
				<a href="/frontPage/photo.jsp" target="_self">相册</a>
				<router-link to="/leaveMsg">给我留言</router-link>
				<!--<a href="/frontPage/leavemsgfront.jsp" target="_self">给我留言</a>-->
				<a href="/frontPage/showleavemsg.jsp" target="_self">留言墙</a>
				<a href="/frontPage/about.html" target="_self">关于本站</a>
			</ul>
		</nav>
	</div>
</template>

<script>
	export default {
		name: "Header"
	}
</script>

<style>
	#topnav {
		width: 100%;
		background: #0099CC;
		height: auto;
		line-height: 46px;
		text-align: center;
		border-radius: 46px;
		position: relative;
	}
</style>