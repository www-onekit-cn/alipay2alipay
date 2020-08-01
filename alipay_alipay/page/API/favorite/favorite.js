Page({
    data:{},
    onLoad:function(){
    },
    isCollected:function(){
        if(my.canIUse('isCollected')){
            my.isFaisCollectedvorite({
                success:(res)=>{my.showToast({
                    title:'查询结果',
                    content:JSON.stringify(res)
                })},
                fail:(error)=>{my.showToast({
                    content:'fail' + JSON.stringify(error)
                })}
            });
        } else {
            my.alert({
                title:'版本过低',
                content:'my.isCollected() 客户端10.1.65开始支持'
            });
        }
    }
});
