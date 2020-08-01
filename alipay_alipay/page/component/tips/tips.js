Page({
    openPage:function(e){
        my.navigateTo({
            url:e.target.dataset.url
        });
    }
});
