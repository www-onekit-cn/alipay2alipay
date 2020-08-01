Page({
    data:{
        alphabet:[
        ]
    },
    onLoad:function(){
        const charCode = 65;
        const charList = [
        ];
        for(var i = 0;i < 26;i++){
            charList.push(String.fromCharCode(charCode + i));
        };
        this.setData({
            alphabet:charList
        });
    },
    onAlphabetClick:function(ev){
        my.alert({
            content:JSON.stringify(ev.data)
        });
    }
});
