import debounce from "/util/debounce";
const order = [
    'blue',
    'red',
    'green',
    'yellow'
];
Page({
    data:{
        toView:'red',
        scrollTop:100
    },
    onLoad:function(){
        this.scroll = debounce(this.scroll.bind(this),100);
    },
    upper:function(e){
        console.log(e);
    },
    lower:function(e){
        console.log(e);
    },
    scroll:function(e){
        this.setData({
            scrollTop:e.detail.scrollTop
        });
    },
    scrollEnd:function(){
    },
    scrollToTop:function(e){
        console.log(e);
        this.setData({
            scrollTop:0
        });
    },
    tap:function(e){
        for(var i = 0;i < order.length;++i){
            if(order[i] === this.data.toView){
                const next = (i + 1) % order.length;
                this.setData({
                    toView:order[next],
                    scrollTop:next * 200
                });
                break;
            }
        };
    },
    tapMove:function(){
        this.setData({
            scrollTop:this.data.scrollTop + 10
        });
    }
});
