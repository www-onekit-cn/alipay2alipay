Page({
    data:{},
    onLoad:function(){
    },
    titleGo:function(){
        my.showToast({
            content:'点击箭头，可设置跳转'
        });
    },
    titleMore:function(){
        my.showToast({
            content:'点击更多，展开气泡菜单'
        });
    },
    titleClose:function(){
        my.showToast({
            content:'点击关闭，可设置关闭'
        });
    },
    setInfo:function(e){
        const {dataset} = e.target;
        const {name} = dataset;
        console.log(e.detail.value);
        this.setData({
            [name]:e.detail.value
        });
    }
});
