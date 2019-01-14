<template>
    <div class="secKillContainer">
        <!--倒计时-->
        <div class="counter">
            <p>京东秒杀</p>
            <p>FLASH DEALS</p>
            <p><span class="killIcon"></span></p>
            <p>本场距离结束还剩</p>
            <p class="counterTime"><span v-for="(item,index) in countDown" :key="index">{{item}}</span></p>
        </div>
        <!--轮播图-->
        <div class="secKillList">
            <swiper :options="swiperOption">
                <swiper-slide>
                    <div>11111111111111</div>
                </swiper-slide>
                <swiper-slide>
                    <div>22222222222222</div>
                </swiper-slide>
                <swiper-slide>
                    <div>33333333333</div>
                </swiper-slide>
                <swiper-slide>
                    <div>44444445444</div>
                </swiper-slide>
                <swiper-slide>
                    <div>555555555555</div>
                </swiper-slide>
                <swiper-slide>
                    <div>666666666666</div>
                </swiper-slide>
                <!-- <div class="swiper-pagination" slot="pagination"></div> -->
                <div class="swiper-button-prev prevBtn iconfont icon-zuo"></div>
                <div class="swiper-button-next nextBtn iconfont icon-you"></div>
            </swiper>
        </div>
        <!--其他-->
        <div class="secKillOthers"></div>
    </div>
</template>

<script>
//秒杀模块
    export default {
        name:"secKillContainer",
        data() {
            return {
                timer: null,
                countDownTime:36250000,//倒计时毫秒数
                countDown:{hour:'00',minutes:'00',seconds:'00'},
                swiperOption: {
                    clickable :true,
                    // autoplay: true,
                    slidesPerView: 3,
                    slidesPerColumn: 1,
                    direction: 'horizontal',
                    fadeEffect: {//卡片淡入淡出
                        crossFade: true,
                    },
                    navigation: {//前后按钮
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        hiddenClass: 'my-button-hidden',
                    },
                    // pagination: {//分页器
                    //     el: '.swiper-pagination',
                    //     renderBullet: function (index, className) {
                    //         return '<span class="' + className + '"></span>';
                    //     },
                    // },
                },
            }
        },
        beforeDestroy(){
            //跳转页面之前清除倒计时的定时器
            if(this.timer){
                clearInterval(this.timer);
            }
        },
        mounted(){
            this.timer = setInterval(()=>{
                this.countDown = this.$utils.getHMS(this.countDownTime);
                this.countDownTime -= 1000;
            },1000)
        }
    }
</script>

<style scoped>
    .secKillContainer{
        height: 300px;
        display: flex;
    }
    .secKillContainer>div{
        box-sizing: border-box;
    }
    .secKillContainer>.counter{
        width: 190px;
        background-color: #ea3635;
        color: #fff;
        padding: 50px 5px 20px;
    }
    .secKillContainer>.counter>p{
        text-align: center;
    }
    .secKillContainer>.counter>p:first-child{
        font-size: 36px;
        font-weight: 600;
    }
    .secKillContainer>.counter>p:nth-child(2){
        font-size: 20px;
        padding: 10px 0;
        color: rgba(255, 255, 255, 0.5)
    }
    .secKillContainer>.counter>p:nth-child(3){
        padding: 12px 0;
    }
    .secKillContainer>.secKillList{
        width: 800px;
        overflow: hidden;
        position: relative;
    }
    .secKillContainer>.secKillOthers{
        width: 202px;
    }
    .secKillContainer .killIcon{
        display: inline-block;
        width: 20px;
        height: 39px;
        background: url(https://misc.360buyimg.com/mtd/pc/index_2017/2.1.0/static/images/sprite.secKillContainer.png) -34px 43px;
    }
    .secKillContainer .counterTime{
        margin-top: 15px;
        position: relative;
    }
    .secKillContainer .counterTime:after{
        content:'';
        position: absolute;
        height: 1px;
        background-color: rgba(234, 54, 53, .7);
        top: 21px;
        left: 0;
        width: 100%;
    }
    .secKillContainer .counterTime>span{
        display: inline-block;
        padding: 8px 12px;
        background-color: #2f3430;
        color: #fff;
        font-size: 22px;
    }
    .secKillContainer .counterTime>span+span{
        margin-left: 2px;
    }
    .prevBtn,.nextBtn{
        background: rgba(0,0,0,.4);
        width: 30px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        transition: all .3s;
        opacity: .6;
    }
    .prevBtn:hover,.nextBtn:hover{
        opacity: 1;
    }
    .swiper-button-prev{
        left: 0;
    }
    .swiper-button-next{
        right: 0;
    }
    .secKillList div{
        /* width: 400px; */
        height: 100%;
    }
</style>