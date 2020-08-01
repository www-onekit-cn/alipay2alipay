Page({
    data:{},
    onLoad:function(){
    },
    openCardList:function(){
        my.openCardList({
            success:(res)=>{my.showToast({
                content:'调用成功：' + JSON.stringify(res)
            })},
            fail:(error)=>{my.alert({
                content:'调用失败：' + JSON.stringify(error)
            })},
            complete:(res)=>{my.alert({
                content:'complete回调！'
            })}
        });
    },
    openVoucherList:function(){
        my.openVoucherList({
            success:(res)=>{my.showToast({
                content:'调用成功：' + JSON.stringify(res)
            })},
            fail:(error)=>{my.alert({
                content:'调用失败：' + JSON.stringify(error)
            })},
            complete:(e)=>{my.showToast({
                content:'complete回调！'
            })}
        });
    },
    openTicketList:function(){
        my.openTicketList({
            success:(res)=>{my.showToast({
                content:'调用成功：' + JSON.stringify(res)
            })},
            fail:(error)=>{my.alert({
                content:'调用失败：' + JSON.stringify(error)
            })},
            complete:(e)=>{my.showToast({
                content:'complete回调！'
            })}
        });
    },
    openCardDetail:function(){
        my.openCardDetail({
            passId:'12339004637',
            success:(res)=>{my.showToast({
                content:'调用成功：' + JSON.stringify(res)
            })},
            fail:(error)=>{my.alert({
                content:'调用失败：' + JSON.stringify(error)
            })},
            complete:(res)=>{my.showToast({
                content:'complete回调！'
            })}
        });
    },
    openVoucherDetail:function(){
        my.openVoucherDetail({
            passId:'15153594937',
            success:(res)=>{my.showToast({
                content:'调用成功：' + JSON.stringify(res)
            })},
            fail:(error)=>{my.alert({
                content:'调用失败：' + JSON.stringify(error)
            })},
            complete:(e)=>{my.showToast({
                content:'complete回调！'
            })}
        });
    },
    openTicketDetail:function(){
        my.openTicketDetail({
            passId:"11688279837",
            success:(res)=>{my.showToast({
                content:'调用成功：' + JSON.stringify(res)
            })},
            fail:(error)=>{my.alert({
                content:'调用失败：' + JSON.stringify(error)
            })},
            complete:(e)=>{my.showToast({
                content:'complete回调！'
            })}
        });
    },
    openKBVoucherDetail:function(){
        my.openKBVoucherDetail({
            passId:'13813142037',
            success:(res)=>{my.showToast({
                content:'调用成功：' + JSON.stringify(res)
            })},
            fail:(error)=>{my.alert({
                content:'调用失败：' + JSON.stringify(error)
            })},
            complete:(e)=>{my.showToast({
                content:'complete回调！'
            })}
        });
    },
    gotoDetail:function(){
        my.navigateToCouponDetail({
            itemId:'2017072010076000000015900884',
            chInfo:'ch_cainiao__spmid_a13.b579',
            success:(res)=>{my.alert({
                title:'success',
                content:JSON.stringify(res)
            })},
            fail:(res)=>{my.alert({
                title:'fail',
                content:JSON.stringify(res)
            })},
            complete:(res)=>{my.showToast({
                content:'complete回调！'
            })}
        });
    },
    openMerchantCardList:function(){
        my.openMerchantCardList({
            partnerId:'2088621202286735',
            success:(res)=>{my.showToast({
                content:'调用成功：' + JSON.stringify(res)
            })},
            fail:(error)=>{my.alert({
                content:'调用失败：' + JSON.stringify(error)
            })},
            complete:(e)=>{my.showToast({
                content:'complete回调！'
            })}
        });
    },
    openMerchantVoucherList:function(){
        my.openMerchantVoucherList({
            partnerId:'2088521411242352',
            success:(res)=>{my.showToast({
                content:'调用成功：' + JSON.stringify(res)
            })},
            fail:(error)=>{my.alert({
                content:'调用失败：' + JSON.stringify(error)
            })},
            complete:(e)=>{my.showToast({
                content:'complete回调！'
            })}
        });
    },
    openMerchantTicketList:function(){
        my.openMerchantTicketList({
            partnerId:'2013080800000754',
            success:(res)=>{my.showToast({
                content:'调用成功：' + JSON.stringify(res)
            })},
            fail:(error)=>{my.alert({
                content:'调用失败：' + JSON.stringify(error)
            })},
            complete:(e)=>{my.showToast({
                content:'complete回调！'
            })}
        });
    }
});
