'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
	dev: {

		// Paths
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {
			//前后端分离跨域处理。 说明：http://localhost:8080为要请求的服务器地址，如果get或post请求为：/user/login，则相当于：http://localhost:8080/user/login
			/*'/': {
				target: 'http://localhost:8888',//这是要转发到后端也就是springboot项目中的
				changeOrigin: true,
				pathRewrite: {
					'^/': ''
				}
			},*/
			
			////前后端分离跨域处理。 说明：http://localhost:8888为要请求的服务器地址，如果get或post请求为：/after/user/login，则相当于：http://localhost:8888/user/login
			'/after': {
				target: 'http://localhost:8888',//这是要转发到后端也就是springboot项目中的
				changeOrigin: true,
				pathRewrite: {
					'^/after': ''
				}
			},
			//添加这个，会把/api的原目标请求，转成到/static/mock目录下
			'/api': {
				target: 'http://localhost:8080',//这个是要转发到本项目也就是本vue项目中的
				pathRewrite: {
					'^/api': '/static/mock'
				}
			},
			
		},

		// Various Dev Server settings
		host: 'localhost', // can be overwritten by process.env.HOST
		port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
		autoOpenBrowser: false,
		errorOverlay: true,
		notifyOnErrors: true,
		poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

		/**
		 * Source Maps
		 */

		// https://webpack.js.org/configuration/devtool/#development
		devtool: 'cheap-module-eval-source-map',

		// If you have problems debugging vue-files in devtools,
		// set this to false - it *may* help
		// https://vue-loader.vuejs.org/en/options.html#cachebusting
		cacheBusting: true,

		cssSourceMap: true
	},

	build: {
		// Template for index.html
		index: path.resolve(__dirname, '../dist/index.html'),

		// Paths
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',

		/**
		 * Source Maps
		 */

		productionSourceMap: true,
		// https://webpack.js.org/configuration/devtool/#production
		devtool: '#source-map',

		// Gzip off by default as many popular static hosts such as
		// Surge or Netlify already gzip all static assets for you.
		// Before setting to `true`, make sure to:
		// npm install --save-dev compression-webpack-plugin
		productionGzip: false,
		productionGzipExtensions: ['js', 'css'],

		// Run the build command with an extra argument to
		// View the bundle analyzer report after build finishes:
		// `npm run build --report`
		// Set to `true` or `false` to always turn it on or off
		bundleAnalyzerReport: process.env.npm_config_report
	}
}