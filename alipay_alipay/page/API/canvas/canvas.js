import example from "./example.js";
var imageData;
Page({
    onLoad:function(){
        this.context = my.createCanvasContext('canvas');
        var methods = Object.keys(example);
        this.setData({
            methods:methods
        });
        var that = this;
        methods.forEach(function(method){
            that[method] = function(){
                example[method](that.context);
                that.context.draw();
            };
        });
    },
    log:function(e){
        console.log('canvas',e);
    },
    toTempFilePath:function(){
        this.context.toTempFilePath({
            success:function(res){
                my.previewImage({
                    urls:[
                        res.apFilePath
                    ]
                });
            },
            fail:function(res){
                my.alert({
                    title:'toTempFilePath',
                    content:`error: ${res.error}`
                });
            }
        });
    },
    preloadCanvasImage:function(){
        if(my.canIUse('preloadCanvasImage')){
            var img;
            var that = this;
            my.preloadCanvasImage({
                urls:[
                    '/image/ant.png'
                ],
                success:function(res){
                    img = res.loaded["/image/ant.png"];
                    that.context.drawImage(img,0,0);
                    that.context.draw();
                }
            });
        }
    },
    getImageData:function(){
        this.context.setFillStyle('red');
        this.context.fillRect(10,10,150,100);
        this.context.draw(false,()=>{this.context.getImageData({
            x:0,
            y:0,
            width:100,
            height:100,
            fail:(error)=>{console.log(error)},
            success:(res)=>{
                console.log(res.width);
                console.log(res.height);
                console.log(res.data instanceof Uint8ClampedArray);
                console.log(res.data.length);
                imageData = res.data;
            }
        })});
    },
    putImageData:function(){
        this.context.clearRect(0,0,100,100);
        this.context.draw(true,()=>{setTimeout(()=>{this.context.putImageData({
            x:0,
            y:0,
            width:100,
            data:imageData,
            fail:(error)=>{console.log(error)},
            success:function(xx){
                console.log('canvasPutImageData',xx);
            }
        })},2000)});
    }
});
