Page({
    data:{
        pageName:'component/view'
    },
    onLoad:function(){
        this.setData({
            returnIndex:getCurrentPages().length === 1
        });
    },
    returnIndex:function(){
        my.switchTab({
            url:'/page/tabBar/component/index'
        });
    }
});
