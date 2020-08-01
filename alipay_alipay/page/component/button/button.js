Page({
    data:{},
    onShareAppMessage:function(){
        return {
            title:'view page',
            path:'page/component/view/view'
        };
    },
    onSubmit:function(){
        my.alert({
            title:'You click submit'
        });
    },
    onReset:function(){
        my.alert({
            title:'You click reset'
        });
    }
});
