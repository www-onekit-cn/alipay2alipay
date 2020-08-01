Page({
    data:{
        type:'market',
        maskZindex:10
    },
    maskClick:function(){
        if(this.data.type === 'market'){
            this.setData({
                type:'product'
            });
        } else {
            this.setData({
                type:'',
                show:false
            });
        }
    }
});
