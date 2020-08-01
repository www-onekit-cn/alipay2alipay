Page({
    data:{
        thumb:'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
        expand3rd:false
    },
    onCardClick:function(ev){
        my.alert({
            content:ev.info
        });
    },
    onActionClick:function(){
        my.alert({
            content:'action clicked'
        });
    },
    onExtraActionClick:function(){
        my.alert({
            content:'extra action clicked'
        });
    },
    toggle:function(){
        this.setData({
            expand3rd:!this.data.expand3rd
        });
    }
});
