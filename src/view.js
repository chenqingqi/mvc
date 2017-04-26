window.View = Backbone.View.extend(
{
    initialize:function()
    {
        $(this.el).bind('click',this.click)
    },

    el:$("#panel"),

    render:function(context) 
    {
      $(this.el).html(context);
    },

    click:function()
    {
        console.log('点击事件')
    }
})