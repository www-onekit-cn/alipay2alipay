Page({
    showAuthGuide:function(){
        my.showAuthGuide({
            bizType:'AppletPG',
            authType:'LBS',
            success:(res)=>{my.alert({
                content:'调用成功：' + JSON.stringify(res)
            })},
            fail:(error)=>{my.alert({
                content:'调用失败：' + JSON.stringify(error)
            })}
        });
    }
});
