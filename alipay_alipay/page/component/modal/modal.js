Page({
    data:{
        modalOpened:false,
        modalOpened2:false,
        modalOpened21:false,
        modalOpened22:false,
        modalOpened222:false,
        modalOpened23:false,
        modalOpened3:false,
        modalOpened4:false,
        modalOpened5:false,
        modalOpened6:false,
        buttons5:[
            {
                text:'取消'
            },
            {
                text:'主操作',
                extClass:'buttonBold'
            }
        ],
        buttons6:[
            {
                text:'主操作',
                extClass:'buttonBold'
            },
            {
                text:'取消'
            }
        ],
        buttons7:[
            {
                text:'取消',
                extClass:'cancelBtn'
            },
            {
                text:'删除',
                extClass:'deleteBtn'
            }
        ],
        buttons8:[
            {
                text:'主操作',
                extClass:'buttonBold'
            },
            {
                text:'更多'
            },
            {
                text:'取消'
            }
        ]
    },
    openModal:function(){
        this.setData({
            modalOpened:true
        });
    },
    onModalClick:function(){
        this.setData({
            modalOpened:false
        });
    },
    onModalClose:function(){
        this.setData({
            modalOpened:false
        });
    },
    openModal2:function(){
        this.setData({
            modalOpened2:true
        });
    },
    onModalClick2:function(){
        this.setData({
            modalOpened2:false
        });
    },
    onModalClose2:function(){
        this.setData({
            modalOpened2:false
        });
    },
    openModal21:function(){
        this.setData({
            modalOpened21:true
        });
    },
    onModalClick21:function(){
        this.setData({
            modalOpened21:false
        });
    },
    onModalClose21:function(){
        this.setData({
            modalOpened21:false
        });
    },
    openModal22:function(){
        this.setData({
            modalOpened22:true
        });
    },
    onModalClick22:function(){
        this.setData({
            modalOpened22:false
        });
    },
    onModalClose22:function(){
        this.setData({
            modalOpened22:false
        });
    },
    openModal222:function(){
        this.setData({
            modalOpened222:true
        });
    },
    onModalClick222:function(){
        this.setData({
            modalOpened222:false
        });
    },
    onModalClose222:function(){
        this.setData({
            modalOpened222:false
        });
    },
    openModal23:function(){
        this.setData({
            modalOpened23:true
        });
    },
    onModalClick23:function(){
        this.setData({
            modalOpened23:false
        });
    },
    onModalClose23:function(){
        this.setData({
            modalOpened23:false
        });
    },
    openModal3:function(){
        this.setData({
            modalOpened3:true
        });
    },
    onModalClick3:function(){
        this.setData({
            modalOpened3:false
        });
    },
    openModal4:function(){
        this.setData({
            modalOpened4:true
        });
    },
    onModalClick4:function(){
        this.setData({
            modalOpened4:false
        });
    },
    openModal5:function(){
        this.setData({
            modalOpened5:true
        });
    },
    onButtonClick5:function(e){
        const {target} = e;
        this.setData({
            modalOpened5:false
        });
        my.alert({
            title:`点击了：${JSON.stringify(dataset)}`,
            buttonText:'关闭'
        });
    },
    openModal6:function(){
        this.setData({
            modalOpened6:true
        });
    },
    onButtonClick6:function(e){
        const {target} = e;
        this.setData({
            modalOpened6:false
        });
        my.alert({
            title:`点击了：${JSON.stringify(dataset)}`,
            buttonText:'关闭'
        });
    },
    openModal7:function(){
        this.setData({
            modalOpened7:true
        });
    },
    onModalClose7:function(){
        this.setData({
            modalOpened7:false
        });
    },
    onButtonClick7:function(e){
        const {target} = e;
        this.setData({
            modalOpened7:false
        });
        my.alert({
            title:`点击了：${JSON.stringify(dataset)}`,
            buttonText:'关闭'
        });
    },
    openModal8:function(){
        this.setData({
            modalOpened8:true
        });
    },
    onButtonClick8:function(e){
        const {target} = e;
        this.setData({
            modalOpened8:false
        });
        my.alert({
            title:`点击了：${JSON.stringify(dataset)}`,
            buttonText:'关闭'
        });
    },
    openModal9:function(){
        this.setData({
            modalOpened9:true
        });
    },
    onModalClose9:function(){
        this.setData({
            modalOpened9:false
        });
    }
});