<!--首页-->
<template>
    <div>
        <div class="indexContainer">
            <div class="header">
                <div class="logo">migo</div>
                <div class="headerMain">
                    <!-- 搜索框 -->
                    <div class="search">
                        <div class="searchBox">
                            <input type="text" placeholder="搜索">
                            <span class="searchIcon iconfont icon-search"></span>
                            <div class="hotSearch">
                                <span v-for="(keyWord,index) in hotKeyWords" :key="index">{{keyWord}}</span>
                            </div>
                        </div>
                        <!-- 购物车数量 -->
                        <div class="shoppingCart" @click="toMyCart">
                            <span><i class="iconfont icon-gouwuche1"></i>我的购物车<i class="goodsNum">0</i></span>
                        </div>
                    </div>
                    <!-- 主导航栏 -->
                    <div class="mainNav">
                        <span v-for="(item,index) in mainNavList" :key="index"><a href="#">{{ item }}</a></span>
                    </div>
                </div>
            </div>
            <div class="banner">
                <!-- 左侧详细导航 -->
                <div class="leftNav">
                    <ul>
                        <li>
                            <span><span>家用电器</span></span>
                        </li>
                        <!-- <li v-for="(item,index) in detailSorts" :key="index">
                            <span v-for="(itemB,index) in item.s" :key="index">
                                <i v-if="index>0" class="divideLine">/</i>
                                <span>{{itemB.n | sortDetailTitle}}</span>
                            </span>
                        </li> -->
                    </ul>
                </div>
                <!-- 中心轮播图 -->
                <div class="goodsShow">
                    <div>
                        <swiper :options="swiperOption">
                            <swiper-slide>
                                <img src="https://m.360buyimg.com/babel/jfs/t1/22949/14/3036/56494/5c23632aE9f6f0a67/19e3effbbe480803.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img src="https://m.360buyimg.com/babel/jfs/t1/15843/35/2196/66399/5c1a2b1dE0c19c753/4acf70b9397bdf01.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img src="https://m.360buyimg.com/babel/jfs/t1/9481/36/10388/81500/5c21e4a0E77c4793c/babf10b61e721b0b.jpg"/>
                            </swiper-slide>
                            <div class="swiper-pagination" slot="pagination"></div>
                            <div class="swiper-button-prev prevBtn iconfont icon-zuo"></div>
                            <div class="swiper-button-next nextBtn iconfont icon-you"></div>
                        </swiper>
                    </div>
                    <ul>
                        <li><a href="#"><img src="@/assets/img/index1_1.jpg"/></a></li>
                        <li><a href="#"><img src="@/assets/img/index1_2.jpg"/></a></li>
                        <li><a href="#"><img src="@/assets/img/index1_3.jpg"/></a></li>
                    </ul>
                </div>
                <!-- 其他个人操作 -->
                <div class="personalOp">
                    <!--未登录-->
                    <div class="visitor">
                        <div class="photo"></div>
                        <p class="loginTip">Hi~欢迎来到京东！</p>
                        <p class="loginOrRegist"><span>登录</span><span>注册</span></p>
                        <p><button class="newWelfare">新人福利</button><button class="member">PLUS会员</button></p>
                    </div>
                    <!--登陆之后显示个人信息-->
                    <div class="memberPanel"></div>
                    <!--京东快报-->
                    <div class="news">
                        <p class="title"><span>京东快报</span><span>更多<i class="iconfont icon-zuojiantou"></i></span></p>
                        <ul class="newsList">
                            <li v-for="(item,index) in newsContext" :key="index" >
                                <span class="newsType" :style="{backgroundColor:typeColors[index]}">{{ newsTypes[index] }}</span>
                                <span class="newsContext">{{ item }}</span>
                            </li>
                        </ul>
                    </div>
                    <!-- 小工具 -->
                    <div class="toolsPanel">
                        <!-- <div> -->
                            <span v-for="(item,index) in toolsList" :key="index"><i :class="['iconfont', item.icon]"></i>{{item.title}}</span>
                        <!-- </div> -->
                        <div class="detailInfo">
                            <!--向上划箭头-->
                            vvvvvv
                        </div>
                    </div>
                </div>
            </div>
            <!--秒杀-->
            <div class="seckill">
                <SecKill/>
            </div>
            <!--新年特辑-->
            <div class="stockpile">
                <Stockpile/>
            </div>
            <!--排行榜-->
            <div class="rankList">
                <RankList/>
            </div>
        </div>
    </div>
</template>

<script>
import SecKill from '../components/index/Seckill'
import Stockpile from '../components/index/Stockpile'
import RankList from '@/components/index/RankList'
export default {
  name: "indexContainer",
  components:{
    SecKill,
    Stockpile,
    RankList
  },
  data() {
    return {
      mainNavList: ["秒杀","优惠券","会员","闪购","拍卖","migo时尚","migo超市","海囤全球","xxjinrong"],
      hotKeyWords: ["好物好家电", "米面杂粮", "nova4", "新年美妆", "每99减100"],
      detailSorts: [],
      newsTypes:['公告','活动','HOT','热门'],
      newsContext:[
          'VERTU官方旗舰店满100减99',
          '美旅拉杆箱满299享受九折优惠',
          'iPhone真香：从528',
          'VERTU官方旗舰店满100减99'
      ],
      typeColors:['#90b0c6','#e0b95a','#e47f7f','#e47f7f'],
      products:[],
      swiperOption: {
        clickable :true,
        autoplay: true,
        effect : 'fade',
        fadeEffect: {//卡片淡入淡出
            crossFade: true,
        },
        navigation: {//前后按钮
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hiddenClass: 'my-button-hidden',
        },
        pagination: {//分页器
            el: '.swiper-pagination',
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            },
        },
      },
      toolsList:[
          {icon:'icon-ichuafei',title:'话费'},
          {icon:'icon-jiudian',title:'酒店'},
          {icon:'icon-jipiao',title:'机票'},
          {icon:'icon-94',title:'游戏'},
          {icon:'icon-dianyingpiaoiocn',title:'电影票'},
          {icon:'icon-huochepiao',title:'火车票'},
          {icon:'icon-lipin',title:'礼品卡'},
          {icon:'icon-jiayouqia',title:'加油卡'},
          {icon:'icon-web-icon-',title:'企业'},
          {icon:'icon-38',title:'理财'},
          {icon:'icon-jingdongzhongchou',title:'众筹'},
          {icon:'icon-baitiaoquxian',title:'白条'},
      ]
    };
  },
  mounted() {
    // this.getSortDetails();
    // this.getNewsList();
  },
  filters: {
    sortDetailTitle(value) {
      if (value.indexOf("|")) {
        return value.split("|")[1].trim();
      }
      return "";
    }
  },
  methods: {
    //跳转到购物车
    toMyCart(){
        console.log(this)
        this.$router.push('/cart');
    },
    //获取详细分类列表
    getSortDetails() {
      this.$jsonp
        .http("https://dc.3.cn/category/get", "gbk", {
          callback: "callback"
        })
        .then(res => {
          this.detailSorts = res.data;
        });
    },
    //获取新闻列表
    getNewsList(){
        this.$jsonp.http("https://floor.jd.com/recommend/news/get","utf-8",{
            callback: "callback"
        }).then(res => {
            console.log(res)
            // this.newsList = res
        })
    }
  }
};
</script>
<style>
#testSpan{
    color:#f00;
}
</style>

<style scoped>

.indexContainer>div {
  width: 1190px;
  margin: 0 auto;
  display: flex;
}
.indexContainer>div+div{
    margin-top:20px;
}
.header > .logo {
  width: 190px;
  height: 190px;
  background-color: #fff;
  color: #e30000;
  font-size: 40px;
  text-align: center;
  line-height: 190px;
  margin-top: -30px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(181, 176, 176, 0.2);
}
.search {
  padding-top: 50px;
  padding-left: 128px;
  display: flex;
}
.searchBox {
  position: relative;
}
.searchBox input {
  width: 500px;
  height: 36px;
  line-height: 36px;
  background: #fff;
  border: 0;
  outline: 0;
  padding-left: 5px;
  font-size: 16px;
  color: #666666;
}
.searchBox .searchIcon {
  display: inline-block;
  background-color: #e30000;
  position: absolute;
  font-size: 24px;
  color: #ffffff;
  font-weight: 600;
  padding: 0 15px;
  height: 38px;
  line-height: 38px;
  cursor: pointer;
}
.shoppingCart {
  width: 177px;
  margin-left: 88px;
  height: 36px;
  line-height: 36px;
  background: #fff;
  cursor: pointer;
}
.shoppingCart span {
  font-size: 14px;
  color: #e30000;
  position: relative;
}
.shoppingCart .goodsNum {
  position: absolute;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  background-color: #e30000;
  color: #fff;
  font-style: normal;
  border-radius: 50%;
  top: -7px;
  right: -21px;
}
.shoppingCart span i {
  font-size: 14px;
  font-weight: 600;
  margin-right: 3px;
}
.hotSearch {
  color: #999;
  font-size: 12px;
  text-align: left;
}
.hotSearch > span {
  display: inline-block;
  margin-top: 5px;
}
.hotSearch > span + span {
  margin-left: 10px;
}
.mainNav {
  height: 50px;
  line-height: 70px;
}
.mainNav > span {
  display: inline-block;
  padding: 0 20px;
  color: #666;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
}
.mainNav > span:hover a {
  color: #e30000;
}
.banner {
  height: 480px;
}
.leftNav {
  width: 190px;
  background-color: #fff;
}
.banner .leftNav ul {
  text-align: left;
  padding-left: 10px;
}
.banner .leftNav li {
  height: 26px;
  line-height: 26px;
}
.banner .leftNav span {
  color: #666;
  display: inline-block;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}
.banner .leftNav span > span:hover {
  color: #e30000;
}
.banner .leftNav i {
  font-size: 14px;
  padding: 0 2px;
}
.goodsShow {
  display: flex;
  padding: 10px;
  cursor: pointer;
}
.goodsShow > ul {
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  min-height: 474px;
}
.goodsShow > ul > li:hover img {
  opacity: 0.8;
}
.goodsShow > ul > li img {
  opacity: 1;
  transition: all 0.3s;
}
.goodsShow>div:first-child{
    width: 590px;
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
.personalOp{
    background-color: #fff;
    width: 190px;
    text-align: center;
    margin-top: 10px;
}
.personalOp .photo{
    width: 60px;
    border-radius: 50%;
    border: 6px solid #eee;
    height: 60px;
    background: url(https://misc.360buyimg.com/mtd/pc/common/img/no_login.jpg) no-repeat;
    background-size: cover; 
    margin: -15px auto 0;
    box-shadow: 3px 6px 25px #c3c3c3;
}

.loginTip{    
    padding: 7px;
    font-size: 12px;
    color: #aaa;
}
.loginOrRegist{
    font-size: 12px;
    color: #666;
    padding: 5px;
}
.loginOrRegist span:last-child{
    margin-left: 4px;
}
.newWelfare,.member{
    padding: 5px 10px;
    background: #fff;
    border: 0;
    border-radius: 15px;
    box-shadow: 1px 5px 10px rgba(0,0,0,.5);
    outline:0;
    margin-top: 10px;
    font-size: 12px;
    cursor: pointer;
    transition: all .3s;
}
.newWelfare{
    color: #e30000;
}
.member{
    margin-left: 5px;
    color: #e5d790;
    background: #363634;
}
.member:hover,.newWelfare:hover{
    color:#fff;
    background-color: #e30000;
}
.news{
    font-size: 12px;
    margin-top: 10px;
    
}
.news .title{
    color:#666;
    display: flex;
    justify-content:space-between;
    padding: 10px 20px;
}
.news .title>span:first-child{
    font-weight: 700;
    font-size: 14px;
    color:#333;
}
.news .title>span{
    cursor: pointer;
}
.news .title>span>i{
    vertical-align: middle;
}
.news ul.newsList{
    border-bottom: 1px solid rgba(200,200,200,.3);
    padding-bottom: 12px;
}
.news ul.newsList>li{
    line-height: 22px;
    padding:0 5px;
}
.news ul.newsList>li span{
    color: #666;
    display: inline-block;
    cursor: pointer;
}
.news ul.newsList>li .newsType{
    padding: 0 10px;
    border-radius: 2px;
    background: #f00;
    color: #fff;
    height: 20px;
    line-height: 20px;
    display: inline-block;
}
.news ul.newsList>li .newsContext{
    width: 125px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
    text-align: left;
    margin-left: 5px;
}
.toolsPanel{
    padding-top:9px;
    display:flex;
    flex-wrap: wrap;
    position: relative;
    overflow: hidden;
}
.toolsPanel>.detailInfo{
    height: 167px;
    background: #f00;
    position: absolute;
    top: 167px;
    width: 100%;
}
.toolsPanel span{
    display: inline-block;
    position: relative;
    font-size: 12px;
    color: #d3be9b;
    padding-top: 16px;
    margin-top: 12px;
    flex: 0 0 25%;
    cursor: pointer;
}
.toolsPanel span>i{
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -6px;
}
/* :global(.swiper-pagination-bullets .swiper-pagination-bullet){
    background: rgba(0,0,0,0);
    border: 2px solid rgba(255,255,255,.8);
}
:global(.swiper-pagination-bullets .swiper-pagination-bullet-active){
    box-shadow:1px 1px 10px #fff;
    background: rgba(255,255,255,.5);
} */
</style>
<style>
.swiper-pagination-bullets .swiper-pagination-bullet{
    background: rgba(0,0,0,0) !important;
    border: 2px solid rgba(255,255,255,.8) !important;
    font-size: 20px;
}
.swiper-pagination-bullets .swiper-pagination-bullet-active{
    box-shadow:1px 1px 10px #fff !important;
    background: rgba(255,255,255,.5) !important;
}
</style>
