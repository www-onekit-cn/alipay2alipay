Page({
    setNavigationBar:function(e){
        var title = e.detail.value.title;
        var backgroundColor = e.detail.value.backgroundColor;
        var borderBottomColor = e.detail.value.borderBottomColor;
        var image = e.detail.value.image;
        console.log(title);
        my.setNavigationBar({
            title:title,
            backgroundColor:backgroundColor,
            borderBottomColor:borderBottomColor,
            image:image
        });
    },
    resetNavigationBar:function(){
        my.setNavigationBar({
            reset:true,
            title:'重置导航栏样式'
        });
    }
});
