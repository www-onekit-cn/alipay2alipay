Page({
    scan:function(){
        my.scan({
            type:'qr',
            success:(res)=>{my.alert({
                title:res.code
            })}
        });
    }
});
