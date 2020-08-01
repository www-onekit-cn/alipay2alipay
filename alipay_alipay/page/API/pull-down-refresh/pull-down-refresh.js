Page({
    onPullDownRefresh:function(){
        console.log('onPullDownRefresh',new Date());
    },
    stopPullDownRefresh:function(){
        my.stopPullDownRefresh({
            complete:function(res){
                console.log(res,new Date());
            }
        });
    }
});
