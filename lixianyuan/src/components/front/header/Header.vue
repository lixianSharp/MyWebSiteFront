<template>
	<div id="topDiv">
		<nav id="topnav">
			<ul id="topul">
				<!--<a href="/index.jsp" target="_self">网站首页</a>-->
				<router-link to="/findex">
					<el-tooltip class="item" effect="light" content="网站首页" placement="top-start">
						<el-button>
							<font size="7">
								<i class="el-icon-s-home"></i>
							</font>
						</el-button>
					</el-tooltip>
				</router-link>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<!--<a href="/frontPage/ydyblogMenu/rightShow.jsp" target="_self">博客/笔记分享</a>-->
				<router-link to="/noteShare">
					<el-tooltip class="item" effect="light" content="博客/笔记分享" placement="top-start">
						<el-button>
							<font size="7">
								<i class="el-icon-reading"></i>
							</font>
						</el-button>
					</el-tooltip>
				</router-link>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<router-link to="/gossip">
					<el-tooltip class="item" effect="light" content="闲言碎语" placement="top-start">
						<el-button>
							<font size="7">
								<i class="el-icon-chat-round"></i>
							</font>
						</el-button>
					</el-tooltip>
				</router-link>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<router-link to="/resourceShare">
					<el-tooltip class="item" effect="light" content="学习资源分享" placement="top-start">
						<el-button>
							<font size="7">
								<i class="el-icon-share"></i>
							</font>
						</el-button>
					</el-tooltip>
				</router-link>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<router-link to="/picture">
					<el-tooltip class="item" effect="light" content="相册" placement="top-start">
						<el-button>
							<font size="7">
								<i class="el-icon-picture"></i>
							</font>
						</el-button>
					</el-tooltip>
				</router-link>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<router-link to="/leaveMsg">
					<el-tooltip class="item" effect="light" content="给我留言" placement="top-start">
						<el-button>
							<font size="7">
								<i class="el-icon-chat-dot-round"></i>
							</font>
						</el-button>
					</el-tooltip>
				</router-link>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<router-link to="/showMsg">
					<el-tooltip class="item" effect="light" content="留言墙" placement="top-start">
						<el-button>
							<font size="7">
								<i class="el-icon-s-comment"></i>
							</font>
						</el-button>
					</el-tooltip>
				</router-link>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<router-link to="/about">
					<el-tooltip class="item" effect="light" content="关于本站" placement="top-start">
						<el-button>
							<font size="7">
								<i class="el-icon-user"></i>
							</font>
						</el-button>
					</el-tooltip>
				</router-link>
			</ul>
		</nav>
		<!--<div>
			<el-link href="/findex" target="_blank">网站首页</el-link>
			<el-link type="primary" href="/noteShare">
				博客/笔记分享
			</el-link>
			<el-link type="success" href="/gossip">闲言碎语</el-link>
			<el-link type="warning" href="/resourceShare">学习资源分享</el-link>
			<el-link type="danger">危险链接</el-link>
			<el-link type="info">信息链接</el-link>
		</div>-->

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
		/*background: #409EFF;*/
		height: auto;
		line-height: 46px;
		text-align: -webkit-auto;
		border-radius: 46px;
		position: absolute;
	}
	
	.item {
		background-color: inherit;
		background-image: url(http://www.lixianyuan.org/frontPage/images/index/4.jpg);
	}
</style>