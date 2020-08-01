Page({
    data:{
        key:'',
        data:'',
        keySync:'',
        dataSync:''
    },
    keyChange:function(e){
        console.log(e);
        this.setData({
            key:e.detail.value
        });
    },
    dataChange:function(e){
        this.setData({
            data:e.detail.value
        });
    },
    keyChangeSync:function(e){
        console.log(e);
        this.setData({
            keySync:e.detail.value
        });
    },
    dataChangeSync:function(e){
        this.setData({
            dataSync:e.detail.value
        });
    },
    getStorage:function(){
        var key = this.data.key;
        var data = this.data.data;
        console.log('data: ',this.data);
        if(key.length === 0){
            this.setData({
                key:key,
                data:data
            });
            my.alert({
                title:'读取数据失败',
                content:'key 不能为空'
            });
        } else {
            var that = this;
            my.getStorage({
                key:key,
                success:function(res){
                    my.alert({
                        title:'读取数据成功',
                        content:("data: '" + JSON.stringify(res.data)) + "'"
                    });
                }
            });
            console.log('读取数据成功',my.getStorageSync({
    key:key
}).data);
        }
    },
    setStorage:function(){
        var key = this.data.key;
        var data = this.data.data;
        if(key.length === 0){
            this.setData({
                key:key,
                data:data
            });
            my.alert({
                title:'保存数据失败',
                content:'key 不能为空'
            });
        } else {
            var that = this;
            my.setStorage({
                key:key,
                data:data,
                success:function(){
                    that.setData({
                        key:key,
                        data:data
                    });
                    my.alert({
                        title:'存储数据成功',
                        content:`${key}: ${data}`
                    });
                }
            });
        }
    },
    removeStorage:function(){
        var that = this;
        my.removeStorage({
            key:that.data.key,
            success:function(){
                that.setData({
                    key:'',
                    data:''
                });
                my.alert({
                    title:'删除数据成功',
                    content:''
                });
            }
        });
    },
    clearStorage:function(){
        var that = this;
        my.clearStorage({
            key:that.data.key,
            success:function(){
                that.setData({
                    key:'',
                    data:''
                });
                my.alert({
                    title:'清除数据成功',
                    content:''
                });
            }
        });
    },
    getStorageInfo:function(){
        var that = this;
        my.getStorageInfo({
            success:function(res){
                my.alert({
                    content:JSON.stringify({
                        keys:res.keys,
                        currentSize:res.currentSize,
                        limitSize:res.limitSize
                    })
                });
            }
        });
    },
    getStorageSync:function(){
        var key = this.data.keySync;
        var data = this.data.dataSync;
        console.log('data: ',this.data);
        if(key.length === 0){
            this.setData({
                keySync:key,
                dataSync:data
            });
            my.alert({
                title:'同步读取数据失败',
                content:'key 不能为空'
            });
        } else {
            var res = my.getStorageSync({
                key:key
            });
            if(!res.error){
                my.alert({
                    title:'同步读取数据成功',
                    content:("data: '" + JSON.stringify(res.data)) + "'"
                });
            }
        }
    },
    setStorageSync:function(){
        var key = this.data.keySync;
        var data = this.data.dataSync;
        if(key.length === 0){
            this.setData({
                keySync:key,
                dataSync:data
            });
            my.alert({
                title:'同步保存数据失败',
                content:'key 不能为空'
            });
        } else {
            var res = my.setStorageSync({
                key:key,
                data:data
            });
            if(!res.error){
                this.setData({
                    keySync:key,
                    dataSync:data
                });
                my.alert({
                    title:'同步存储数据成功',
                    content:`${key}: ${data}`
                });
            }
        }
    },
    removeStorageSync:function(){
        var res = my.removeStorageSync({
            key:this.data.keySync
        });
        if(!res.error){
            this.setData({
                keySync:'',
                dataSync:''
            });
            my.alert({
                title:'同步删除数据成功',
                content:''
            });
        }
    },
    clearStorageSync:function(){
        var res = my.clearStorageSync();
        if(!res.error){
            this.setData({
                keySync:'',
                dataSync:''
            });
            my.alert({
                title:'同步清除数据成功',
                content:''
            });
        }
    },
    getStorageInfoSync:function(){
        var res = my.getStorageInfoSync();
        if(!res.error){
            my.alert({
                content:JSON.stringify({
                    keys:res.keys,
                    currentSize:res.currentSize,
                    limitSize:res.limitSize
                })
            });
        }
    }
});
