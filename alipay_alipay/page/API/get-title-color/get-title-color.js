Page({
    data:{
        titleColor:{}
    },
    getTitleColor:function(){
        my.getTitleColor({
            success:(res)=>{this.setData({
                titleColor:res
            })}
        });
    }
});
