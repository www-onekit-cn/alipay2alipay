Page({
    data:{
        src:'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        title:'initial',
        autoplay:false,
        loop:'false',
        startTime:0,
        volume:0.5,
        obeyMuteSwitch:'false',
        seek:0,
        callbackArr:[
            'offCanplay',
            'offPlay',
            'offPause',
            'offStop',
            'offEnded',
            'offTimeUpdate',
            'offError',
            'offWaiting',
            'offSeeking',
            'offSeeked'
        ],
        callbackIndex:0,
        callback:'offCanplay'
    },
    onReady:function(e){
        this.innerAudioContext = my.createInnerAudioContext();
        this.innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
        console.log("onReady over");
        this.onCanplay = this.onCanplay.bind(this);
        this.innerAudioContext.onCanplay(this.onCanplay);
        this.onPlay = this.onPlay.bind(this);
        this.innerAudioContext.onPlay(this.onPlay);
        this.onPause = this.onPause.bind(this);
        this.innerAudioContext.onPause(this.onPause);
        this.onStop = this.onStop.bind(this);
        this.innerAudioContext.onStop(this.onStop);
        this.onError = this.onError.bind(this);
        this.innerAudioContext.onError(this.onError);
        this.onEnded = this.onEnded.bind(this);
        this.innerAudioContext.onEnded(this.onEnded);
        this.onTimeUpdate = this.onTimeUpdate.bind(this);
        this.innerAudioContext.onTimeUpdate(this.onTimeUpdate);
        this.onWaiting = this.onWaiting.bind(this);
        this.innerAudioContext.onWaiting(this.onWaiting);
        this.onSeeking = this.onSeeking.bind(this);
        this.innerAudioContext.onSeeking(this.onSeeking);
        this.onSeeked = this.onSeeked.bind(this);
        this.innerAudioContext.onSeeked(this.onSeeked);
        this.innerAudioContext2 = my.createInnerAudioContext();
        console.log("--------" + JSON.stringify(this.data));
        this.innerAudioContext2.src = 'http://sc1.111ttt.cn/2018/1/03/13/396131153555.mp3';
        this.innerAudioContext2.onPlay(()=>{console.log('开始播放2')});
        this.innerAudioContext2.onPause(()=>{console.log('停止播放2')});
    },
    play:function(res){
        console.log("call play");
        this.innerAudioContext.play();
        console.log("finish call play");
    },
    play2:function(res){
        console.log("call play2");
        this.innerAudioContext2.play();
        console.log("finish call play2");
    },
    pause2:function(){
        console.log("call pause2");
        this.innerAudioContext2.pause();
        console.log("finish call pause2");
    },
    pause:function(){
        console.log("call pause");
        this.innerAudioContext.pause();
        console.log("finish call pause");
    },
    stop:function(){
        console.log("call stop");
        this.innerAudioContext.stop();
        console.log("finish call stop");
    },
    seek:function(){
        console.log("call seek");
        var seekVal = this.data.seek;
        console.log("seek to: " + seekVal);
        this.innerAudioContext.seek(380);
        console.log("finish call seek");
    },
    destroy:function(){
        console.log("call destroy");
        this.innerAudioContext.destroy();
        console.log("finish call destroy");
    },
    onCanplay:function(){
        this.innerAudioContext.onCanplay(()=>{
            this.setData({
                title:'onCanplay'
            });
            console.log('onCanplay');
        });
    },
    onPlay:function(){
        this.setData({
            title:'onPlay'
        });
        console.log('onPlay');
    },
    onPause:function(){
        this.setData({
            title:'onPause'
        });
        console.log('onPause');
    },
    onEnded:function(){
        this.setData({
            title:'onEnded'
        });
        console.log('onEnded');
    },
    onTimeUpdate:function(){
        this.setData({
            title:'onTimeUpdate'
        });
        console.log('onTimeUpdate');
    },
    onError:function(){
        this.setData({
            title:'onError'
        });
        console.log('onError');
    },
    onStop:function(){
        this.setData({
            title:'onStop'
        });
        console.log('onStop');
    },
    onWaiting:function(){
        this.setData({
            title:'onWaiting'
        });
        console.log('onWaiting');
    },
    onSeeking:function(){
        this.setData({
            title:'onSeeking'
        });
        console.log('onSeeking');
    },
    onSeeked:function(){
        this.setData({
            title:'onSeeked'
        });
        console.log('onSeeked');
    },
    offCallback:function(e){
        const index = e.detail.value;
        const {callbackArr} = this.data;
        this.setData({
            callback:callbackArr[index]
        });
        var item = callbackArr[index];
                switch(callbackArr[index]){
            case 'offCanplay':
                this.innerAudioContext.offCanplay(this.onCanplay);
                console.log('offCanplay');
                break;
            case 'offPlay':
                console.log('offPlay--------1');
                this.onPlay();
                console.log('offPlay');
                this.innerAudioContext.offPlay(this.onPlay);
                console.log('offPlay--------2');
                break;
            case 'offPause':
                this.innerAudioContext.offPause(this.onPause);
                console.log('offPause');
                break;
            case 'offStop':
                this.innerAudioContext.offStop(this.onStop);
                console.log('offStop');
                break;
            case 'offEnded':
                this.innerAudioContext.offEnded(this.onEnded);
                console.log('offEnded');
                break;
            case 'offTimeUpdate':
                this.innerAudioContext.offTimeUpdate(this.onTimeUpdate);
                console.log('offTimeUpdate');
                break;
            case 'offError':
                this.innerAudioContext.offError(this.onError);
                console.log('offError');
                break;
            case 'offWaiting':
                this.innerAudioContext.offWaiting(this.onWaiting);
                break;
            case 'offSeeking':
                this.innerAudioContext.offSeeking(this.onSeeking);
                console.log('offSeeking');
                break;
            case 'offSeeked':
                this.innerAudioContext.offSeeked(this.onSeeked);
                console.log('offSeeked');
                break;
            case             default:
                break;
        };
    },
    getAllProps:function(){
        var src = this.innerAudioContext.src;
        var startTime = this.innerAudioContext.startTime;
        var autoplay = this.innerAudioContext.autoplay;
        var loop = this.innerAudioContext.loop;
        var obeyMuteSwitch = this.innerAudioContext.obeyMuteSwitch;
        var duration = this.innerAudioContext.duration;
        var currentTime = this.innerAudioContext.currentTime;
        var paused = this.innerAudioContext.paused;
        var buffered = this.innerAudioContext.buffered;
        var volume = this.innerAudioContext.volume;
        var result = (((((((((((((((((((((((((((("src: " + src) + "\n") + "startTime: ") + startTime) + "\n") + "autoplay: ") + autoplay) + "\n") + "loop: ") + loop) + "\n") + "obeyMuteSwitch: ") + obeyMuteSwitch) + "\n") + "duration: ") + duration) + "\n") + "currentTime: ") + currentTime) + "\n") + "paused: ") + paused) + "\n") + "buffered: ") + buffered) + "\n") + "volume: ") + volume) + "\n";
        my.alert({
            content:'音频属性：' + result
        });
        console.log(result);
    },
    getAllProps2:function(){
        var src = this.innerAudioContext2.src;
        var startTime = this.innerAudioContext2.startTime;
        var autoplay = this.innerAudioContext2.autoplay;
        var loop = this.innerAudioContext2.loop;
        var obeyMuteSwitch = this.innerAudioContext2.obeyMuteSwitch;
        var duration = this.innerAudioContext2.duration;
        var currentTime = this.innerAudioContext2.currentTime;
        var paused = this.innerAudioContext2.paused;
        var buffered = this.innerAudioContext2.buffered;
        var volume = this.innerAudioContext2.volume;
        var result = ((((((((((((((((((((((((((((((("src: " + src) + "\n") + "startTime: ") + startTime) + "\n") + "autoplay: ") + autoplay) + "\n") + "loop: ") + loop) + "\n") + "obeyMuteSwitch: ") + obeyMuteSwitch) + "\n") + "duration: ") + duration) + "\n") + "currentTime: ") + currentTime) + "\n") + "paused: ") + paused) + "\n") + "buffered: ") + buffered) + "\n") + "startTime: ") + startTime) + "\n") + "volume: ") + volume) + "\n";
        my.alert({
            content:'音频属性：' + result
        });
        console.log(result);
    }
});
