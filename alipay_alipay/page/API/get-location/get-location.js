import formatLocation from "./format-location.js";
Page({
    data:{
        hasLocation:false
    },
    getLocation:function(){
        var that = this;
        my.showLoading();
        my.getLocation({
            success:function(res){
                my.hideLoading();
                console.log(res);
                that.setData({
                    hasLocation:true,
                    location:formatLocation(res.longitude,res.latitude)
                });
            },
            fail:function(){
                my.hideLoading();
                my.alert({
                    title:'定位失败'
                });
            }
        });
    },
    clear:function(){
        this.setData({
            hasLocation:false
        });
    }
});
