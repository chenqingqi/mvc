/**
 * 声明
 */
window.app = {};

window.app.menu = {};



/**
 * 视图
 */
app.menu.view = {
	
	init:function(value)
	{
		console.log(value,'视图')
	}
}


/**
 * 数据
 */
app.menu.model = {
	
	init:function()
	{
		console.log('数据')
	},
	
	data:'123456789'
}


/**
 * 控制器
 */
app.menu.control = {
	
	init:function()
	{
		app.menu.view.init(app.menu.model.data)
	}
}

app.menu.control.init()
