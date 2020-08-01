Page({
    data:{
        textArry:[
        ],
        imgUrl:"https://gw.alipayobjects.com/zos/rmsportal/CLaHUdhxQUlVRnlFPisN.jpg"
    },
    onLoad:function(){
        this.callFn(this.data.imgUrl);
    },
    callFn:function(url){
        my.showLoading({
            content:'加载中...',
            delay:100
        });
        my.ocr({
            ocrType:'ocr_business_license',
            path:url,
            success:(res)=>{
                var data = JSON.parse(res.result.outputs[0].outputValue.dataValue);
                var {reg_num,person,business,captial,establish_date,name,address,valid_period} = data;
                this.setData({
                    imgUrl:url,
                    textArry:[
                        {
                            title:'注册号',
                            message:reg_num
                        },
                        {
                            title:'法人',
                            message:person
                        },
                        {
                            title:'公司名称',
                            message:name
                        },
                        {
                            title:'地址',
                            message:address
                        },
                        {
                            title:'注册时间',
                            message:this.reData(establish_date)
                        },
                        {
                            title:'营业期限',
                            message:this.reData(valid_period)
                        },
                        {
                            title:'注册资本',
                            message:captial
                        },
                        {
                            title:'经营范围',
                            message:business
                        }
                    ]
                });
                my.hideLoading();
            },
            fail:(res)=>{
                my.hideLoading();
                my.alert({
                    title:'fail',
                    content:JSON.stringify(res)
                });
            }
        });
    },
    reData:function(data){
        return ((((data.substring(0,4) + '年') + data.substring(4,6)) + '月') + data.substring(6,8)) + '日';
    },
    photoSubmit:function(){
        my.chooseImage({
            count:1,
            success:(res)=>{this.callFn(res.apFilePaths[0])}
        });
    },
    imageLoad:function(e){
    },
    imageError:function(e){
    }
});
