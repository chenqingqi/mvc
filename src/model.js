window.Model = Backbone.Model.extend(
{

    initialize: function()
    {
     this.bind("change:name",function()
     {
        console.log('name改为-'+this.get('name'))
        })
    },

    name :'我是M',

    ajax :function(v)
    {
        console.log('请求后台数据')
    }
})