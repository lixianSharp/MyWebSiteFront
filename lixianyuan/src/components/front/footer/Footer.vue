<template>
	<div>
		<footer>
			<div id="footId" class="footerDivClass">
				<ul>
					<p align="center">
						CopyRight © 2017~2020李贤元个人博客网站
						<a href="http://http://www.beian.miit.gov.cn/">闽ICP备17018144号</a>
					</p>
				</ul>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
		name: "Footer"
	}
</script>

<style>
	#footId {
		width: 100%;
		height: 40px;
		background: gray;
		border-top: 1px solid #727272;
	}
	
	.footerDivClass {
		position: fixed;
		bottom: 0;
	}
</style>