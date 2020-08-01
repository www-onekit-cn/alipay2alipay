Page({
    data:{
        items:[
            {
                value:'a',
                title:'复选框-默认未选中',
                id:'checkbox1'
            },
            {
                checked:true,
                value:'b',
                title:'复选框-默认选中',
                id:'checkbox2'
            },
            {
                checked:true,
                disabled:true,
                value:'c',
                title:'复选框-默认选中disabled',
                id:'checkbox3'
            }
        ],
        items1:[
            {
                ctrlChecked:false,
                disabled:false,
                value:'d',
                title:'复选框-默认未选中',
                id:'checkbox4'
            },
            {
                ctrlChecked:true,
                disabled:true,
                value:'e',
                title:'复选框-默认未选中disabled',
                id:'checkbox5'
            },
            {
                ctrlChecked:true,
                value:'f',
                title:'复选框-默认选中',
                id:'checkbox6'
            }
        ]
    },
    onChange:function(e){
        const {id} = e.currentTarget.dataset;
        const {value} = e.detail;
        const {items1} = this.data;
        const {length} = items1;
        for(var index = 0;index < length;index += 1){
            if(items1[index].id === id){
                this.setData({
                    [`items1[${index}].ctrlChecked`]:value
                });
                break;
            }
        };
    },
    checkedON:function(){
        this.checkedAll(true);
    },
    checkedOFF:function(){
        this.checkedAll(false);
    },
    checkedAll:function(status){
        const items1 = this.data.items1.map((element)=>({
            ...element,
            ctrlChecked:status
        }));
        this.setData({
            items1:items1
        });
    }
});
