/**
 * 定义模块
 * (cmd webpack -p 压缩   -w 侦听)
 */
var path = require("path");

module.exports = {
	
	
	/**
	 * 要打包的文件
	 */
	entry: {
		
		'/src/index':'./src/index.js',
		'/src/index':'./src/index.js'
	},
	
	
	/**
	 * 导出
	 */
	output: 
	{		
		filename: '[name].min.js'
  	}
}

