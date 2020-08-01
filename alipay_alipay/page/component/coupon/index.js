Page({
    data:{
        thumb:'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*b-kqQ4RZgsYAAAAAAAAAAABkARQnAQ'
    },
    onCouponClick:function(e){
        if(e.currentTarget.dataset.used){
            return false;
        } else {
            my.alert({
                content:'可用票券，票券点击事件'
            });
        }
    },
    onButtonTap:function(){
        my.alert({
            content:'胶囊按钮点击事件'
        });
    }
});
