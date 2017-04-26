/**
 * 页面加载完成
 */
window.onload = function()
{
	require('./model.js');
	require('./view.js');
	require('./router.js');
	
	
	//路由
	var router = new Router();  

    Backbone.history.start();  
    
    
    //视图
    var view = new View();

    console.log(view.el)

    view.render('<p>替换原有内容</p>')
    
    
    //数据
    var model = new Model()

    model.ajax()

    console.log(model.name) 

    model.set({name:'MVC中的M模型'});
}
