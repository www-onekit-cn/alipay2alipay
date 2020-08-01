Page({
    data:{
        randomLine:0
    },
    onShow:function(){
        this.setData({
            randomLine:parseInt((Math.random() * 20) + 1,0)
        });
    },
    onChange:function(e){
        console.log('collapse change',e);
    }
});
