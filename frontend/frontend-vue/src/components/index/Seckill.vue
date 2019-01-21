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
                <swiper-slide v-for="(item,index) in productList" :key="index">
                    <div class="productItem">
                        <div class="productPic">
                            <img src="../../assets/img/circle.png">
                        </div>
                        <div class="productPrice">
                            <p>西铁城(CITIZEN)男表 男皮手表</p>
                            <div>
                                <span><i class="iconfont icon-renminbi"></i>6484.00</span>
                                <span><i class="iconfont icon-renminbi"></i>6484.00</span>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="swiper-button-prev prevBtn iconfont icon-zuo"></div>
            <div class="swiper-button-next nextBtn iconfont icon-you"></div>
        </div>
        <!--其他-->
        <div class="secKillOthers">
            <swiper :options="swiperOption1">
                <swiper-slide v-for="i in 2" :key="i">
                    <div class="otherItem">
                        <img src="@/assets/img/bj.jpg">
                    </div>
                    <div class="secKillContainer-swiper-pagination" slot="pagination1"></div>
                </swiper-slide>
            </swiper>
            
        </div>
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
                    slidesPerView: 4,//一页显示的个数
                    slidesPerGroup:4,//一次滚动的个数
                    slidesPerColumn: 1,//行数
                    direction: 'horizontal',
                    navigation: {//前后按钮
                        nextEl: '.secKillContainer .swiper-button-next',
                        prevEl: '.secKillContainer .swiper-button-prev',
                        hiddenClass: 'my-button-hidden',
                    },
                },
                swiperOption1:{
                    autoplay:{
                        reverseDirection: true
                    },
                    loop: true,
                    pagination1:{
                        el: '.secKillContainer-swiper-pagination'
                    }
                },
                productList:[
                    {
                        imgSrc:'/assets/img/watch.jpg'
                    },
                    {
                        imgSrc:'/assets/img/watch.jpg'
                    },
                    {
                        imgSrc:'/assets/img/watch.jpg'
                    },
                    {
                        imgSrc:'/assets/img/watch.jpg'
                    },
                    {
                        imgSrc:'/assets/img/watch.jpg'
                    },
                    {
                        imgSrc:'/assets/img/watch.jpg'
                    },
                    {
                        imgSrc:'/assets/img/watch.jpg'
                    },
                    {
                        imgSrc:'/assets/img/watch.jpg'
                    },
                    {
                        imgSrc:'/assets/img/watch.jpg'
                    },
                    {
                        imgSrc:'/assets/img/watch.jpg'
                    },
                    {
                        imgSrc:'/assets/img/watch.jpg'
                    },
                    {
                        imgSrc:'/assets/img/watch.jpg'
                    },
                    {
                        imgSrc:'/assets/img/watch.jpg'
                    },
                    {
                        imgSrc:'/assets/img/watch.jpg'
                    }
                ]
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
        background: url(../../assets/img/sprite_seckill.png) -34px 43px;
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
    .secKillList .prevBtn,.secKillList .nextBtn{
        outline: none;
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
    .secKillList .productItem{
        height: 100%;
        background-color: #fff;
        cursor: pointer;
        margin-left: 1px;
    }
    .secKillList .productItem .productPic{
        padding: 35px 0;
        height: 213px;
        box-sizing: border-box;
    }
    .secKillList .productItem .productPrice p{
        width: 90%;
        margin-left: 5%;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 30px;
    }
    .secKillList .productItem .productPrice>div{
        padding: 20px 0;
    }
    .secKillList .productItem .productPrice>div>span{
        font-size: 14px;
    }
    .secKillList .productItem .productPrice>div>span:first-child{
        background-color: #ea3635;
        color: #fff;
        font-weight: 600;
        padding: 4px 9px;
    }
    .secKillList .productItem .productPrice>div>span:last-child{
        border: 1px solid #ea3635;
        color: #ccc;
        text-decoration: line-through;
        padding: 3px 8px;
    }
    .secKillList .productItem .productPrice>div>span>i{
        font-size: 14px;
    }
    .secKillOthers {
        width: 202px;
        background: #fff;
        text-align: center;
        padding-top: 10px;
    }
    .secKillOthers img{
        display: inline-block;
    }
</style>