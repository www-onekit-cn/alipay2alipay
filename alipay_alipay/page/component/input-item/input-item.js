Page({
    data:{
        cardNo:'1234****',
        name:'',
        layerShow1:'',
        layerShow2:'垂直输入框的布局',
        layerShow3:'disabled 状态的 input'
    },
    onExtraTap:function(){
        my.alert({
            content:'extra tapped'
        });
    },
    onItemInput:function(e){
        this.setData({
            [e.target.dataset.field]:e.detail.value
        });
    },
    onItemFocus:function(){
    },
    onItemBlur:function(){
    },
    onItemConfirm:function(){
    },
    onClear:function(e){
        this.setData({
            [e.target.dataset.field]:''
        });
    },
    onSend:function(){
        my.alert({
            title:'verify code sent'
        });
    }
});
