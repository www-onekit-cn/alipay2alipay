Page({
    data:{
        verifyCode:''
    },
    onSend:function(){
        my.alert({
            title:'verify code sent'
        });
    },
    onInput:function(e){
        this.setData({
            verifyCode:e.detail.value
        });
    },
    onClear:function(){
    }
});
