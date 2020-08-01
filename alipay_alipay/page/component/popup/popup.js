Page({
    data:{
        showLeft:false,
        showRight:false,
        showTop:false,
        showBottom:false
    },
    onTopBtnTap:function(){
        this.setData({
            showTop:true
        });
    },
    onRightBtnTap:function(){
        this.setData({
            showRight:true
        });
    },
    onLeftBtnTap:function(){
        this.setData({
            showLeft:true
        });
    },
    onButtomBtnTap:function(){
        this.setData({
            showBottom:true
        });
    },
    onPopupClose:function(){
        this.setData({
            showLeft:false,
            showRight:false,
            showTop:false,
            showBottom:false
        });
    }
});
