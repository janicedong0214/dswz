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
                                <span v-for="(keyWord,index) in hotKeyWords" :key="index">
                                    <router-link to="/index">
                                        {{keyWord.text}}
                                    </router-link>
                                </span>
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
                <Category/>
                <!-- 中心轮播图 -->
                <div class="goodsShow">
                    <div>
                        <swiper :options="swiperOption">
                            <swiper-slide v-for="(banner,index) in bannerImgs" :key="index">
                                <img :src="banner.imgUrl"/>
                            </swiper-slide>
                            <div class="swiper-pagination" slot="pagination"></div>
                            <div class="swiper-button-prev prevBtn iconfont icon-zuo"></div>
                            <div class="swiper-button-next nextBtn iconfont icon-you"></div>
                        </swiper>
                    </div>
                    <ul>
                        <li v-for="(el,index) in booksRecommend" :key="index"><router-link :to="el.linkUrl"><img :src="el.imgUrl"/></router-link></li>
                    </ul>
                </div>
                <!-- 其他个人操作 -->
                <div class="personalOp">
                    <!--未登录-->
                    <div class="visitor">
                        <div class="photo"></div>
                        <p class="loginTip">Hi~欢迎来到京东！</p>
                        <p class="loginOrRegist"><span>登录</span><span>注册</span></p>
                        <p>
                            <button class="newWelfare">新人福利</button>
                            <button class="member">PLUS会员</button>
                        </p>
                    </div>
                    <!--登陆之后显示个人信息-->
                    <div class="memberPanel"></div>
                    <!--京东快报-->
                    <div class="news">
                        <p class="title"><span>京东快报</span><span>更多<i class="iconfont icon-zuojiantou"></i></span></p>
                        <ul class="newsList">
                            <li v-for="(item,index) in newsContext" :key="index">
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
            <!--排行榜-->
            <div class="rankList">
                <RankList/>
            </div>
            <div class="rankList">
                <RankList2/>
            </div>
            <!-- 时尚达人 -->
            <div class="fashionBox">
                <p class="title"><span class="lineLeft"></span><span>时尚达人</span><span class="lineRight"></span></p>

            </div>
            <!-- 智能先锋 -->
            <div class="intelligentPioneer">
                <p class="title"><span class="lineLeft"></span><span>智能先锋</span><span class="lineRight"></span></p>

            </div>
            <!-- 生活百货 -->
            <div class="departmentOfLife">
                <p class="title"><span class="lineLeft"></span><span>生活百货</span><span class="lineRight"></span></p>

            </div>
            <!-- 居家优品 -->
            <div class="perfectGoods">
                <p class="title"><span class="lineLeft"></span><span>居家优品</span><span class="lineRight"></span></p>

            </div>
            <!-- JOY寻宝 -->
            <div class="enjoy">
                <p class="title"><span class="lineLeft"></span><span>JOY寻宝</span><span class="lineRight"></span></p>

            </div>
            <!-- 特色推荐 -->
            <div class="special">
                <p class="title"><span class="lineLeft"></span><span>特色推荐</span><span class="lineRight"></span></p>

            </div>
            <!-- 其他 -->
            <div class="others">
                <p class="title"><span class="lineLeft"></span><span>其他</span><span class="lineRight"></span></p>
            </div>
        </div>
    </div>
</template>

<script>
    import SecKill from '../components/index/Seckill'
    import RankList from '../components/index/RankList'
    import RankList2 from '../components/index/RankList2'
    import Category from '../components/index/Category'
    export default {
        name: "indexContainer",
        components: {
            SecKill,
            RankList,
            RankList2,
            Category
        },
        data() {
            return {
                //主导航栏
                mainNavList: ["秒杀", "优惠券", "会员", "闪购", "拍卖", "migo时尚", "migo超市", "海囤全球", "xxjinrong"],
                //搜索关键词推荐
                hotKeyWords: [],
                //图书推荐列表
                booksRecommend:[],
                //banner轮播图列表
                bannerImgs:[],
                newsTypes: ['公告', '活动', 'HOT', '热门'],
                newsContext: [
                    'VERTU官方旗舰店满100减99',
                    '美旅拉杆箱满299享受九折优惠',
                    'iPhone真香：从528',
                    'VERTU官方旗舰店满100减99'
                ],
                typeColors: ['#90b0c6', '#e0b95a', '#e47f7f', '#e47f7f'],
                products: [],
                swiperOption: {
                    clickable: true,
                    autoplay: true,
                    effect: 'fade',
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
                toolsList: [
                    {icon: 'icon-ichuafei', title: '话费'},
                    {icon: 'icon-jiudian', title: '酒店'},
                    {icon: 'icon-jipiao', title: '机票'},
                    {icon: 'icon-94', title: '游戏'},
                    {icon: 'icon-dianyingpiaoiocn', title: '电影票'},
                    {icon: 'icon-huochepiao', title: '火车票'},
                    {icon: 'icon-lipin', title: '礼品卡'},
                    {icon: 'icon-jiayouqia', title: '加油卡'},
                    {icon: 'icon-web-icon-', title: '企业'},
                    {icon: 'icon-38', title: '理财'},
                    {icon: 'icon-jingdongzhongchou', title: '众筹'},
                    {icon: 'icon-baitiaoquxian', title: '白条'},
                ],
                //placeholder定时器
                placeholderTimer:''
            };
        },
        mounted() {
            // this.getNewsList();
            this.getHotKeyWords();
            this.getBooksRecommend();
            this.getBannerImgList();
        },
        watch:{
        },
        methods: {
            //跳转到购物车
            toMyCart() {
                this.$router.push('/cart');
            },
            
            //获取新闻列表
            getNewsList() {
                this.$jsonp.http("https://floor.jd.com/recommend/news/get", "utf-8", {
                    callback: "callbackNewsList"
                }).then(res => {
                    this.newsList = res
                })
            },
            //获取热搜关键词
            getHotKeyWords() {
                this.$jsonp.http("https://floor.jd.com/user/hotwords/get", "utf-8", {
                    callback:"callbackHotWords"
                }).then(res => {
                    res.data.map((item) => {
                        if(item.u) {
                            this.hotKeyWords.push({
                                text:item.ext_columns.text,
                                url:'/index'
                            });
                        }
                    })
                    this.hotKeyWords = this.hotKeyWords.slice(0,this.hotKeyWords.length-2)
                })
            },
            //获取图书推荐列表
            getBooksRecommend() {
                this.$jsonp.http("https://floor.jd.com/recommend/today_gateway/get", "utf-8", {
                    jda:'122270672.1847485673.1553580454.1553580455.1553584757.2',
                    uuid:'1847485673',
                    callback:"jsonpRec"
                }).then(res => {
                    res.data.map((item) => {
                        if(item.img) {
                            this.booksRecommend.push({
                                imgUrl:item.img,
                                linkUrl:'/index'
                            })
                        }else if(item instanceof Array) {
                            item.map((e) => {
                                this.booksRecommend.push({
                                    imgUrl:e.img,
                                    linkUrl:'/index'
                                })
                            })
                        }
                    })

                })
            },
            //获取banner轮播图片
            getBannerImgList(){
                this.$jsonp.http("https://f.3.cn/recommend/focus_gateway/get", "utf-8", {
                    jda:'122270672.1847485673.1553580454.1553580455.1553584757.2',
                    uuid:'1847485673',
                    callback:"jsonpFocus"
                }).then(res => {
                    res.data.map((item) => {
                        item.map((subItem)=>{
                            this.bannerImgs.push({
                                imgUrl: subItem.src,
                                linkUrl: '/index'
                            })
                        })
                    })
                })
            }
        }
    };
</script>
<style>
    #testSpan {
        color: #f00;
    }
</style>

<style lang="scss" scoped>
    .indexContainer {
        > div {
            width: 1250px;
            margin: 0 auto;
            display: flex;
            box-sizing: border-box;
            padding: 0 30px;
            + div {
                margin-top: 30px;
            }
            >.title {
                font-weight: 600;
                font-size: 20px;
                width: 100%;
                text-align: center;
                .lineLeft,.lineRight {
                    display: inline-block;
                    background-color: #333;
                    width: 90px;
                    height: 5px;
                    vertical-align: middle;
                    margin: 0 20px;
                }
            }
        }
        > .stockpile {
            padding: 0;
        }
        .header {
            > .logo {

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
                .searchBox {
                    position: relative;
                    input {
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
                    .searchIcon {
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
                }
            }
        }

    }

    .shoppingCart {
        width: 177px;
        margin-left: 88px;
        height: 36px;
        line-height: 36px;
        background: #fff;
        cursor: pointer;
        span {
            font-size: 14px;
            color: #e30000;
            position: relative;
            i {
                font-size: 14px;
                font-weight: 600;
                margin-right: 3px;
            }
        }
        .goodsNum {
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
    }

    .hotSearch {
        color: #999;
        font-size: 12px;
        text-align: left;
        > span {
            display: inline-block;
            margin-top: 5px;
            + span {
                margin-left: 10px;
            }
            &:hover a{
                color:#e30000;
            }
        }
    }

    .mainNav {
        height: 50px;
        line-height: 70px;
        > span {
            display: inline-block;
            padding: 0 20px;
            color: #666;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 14px;
            &:hover a {
                color: #e30000;
            }
        }
    }

    .banner {
        height: 480px;
    }

    .goodsShow {
        display: flex;
        padding: 10px;
        cursor: pointer;
        > ul {
            margin-left: 10px;
            display: flex;
            justify-content: space-between;
            flex-flow: column;
            min-height: 474px;
            > li {
                img {
                    opacity: 1;
                    transition: all 0.3s;
                    width: 190px;
                    height: 150px;
                    border: 0;
                }
                &:hover img {
                    opacity: 0.8;
                }
            }
        }
        > div:first-child {
            width: 590px;
        }
    }

    .prevBtn, .nextBtn {
        background: rgba(0, 0, 0, .4);
        width: 30px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        transition: all .3s;
        opacity: .6;
    }

    .prevBtn:hover, .nextBtn:hover {
        opacity: 1;
    }

    .swiper-button-prev {
        left: 0;
    }

    .swiper-button-next {
        right: 0;
    }

    .personalOp {
        background-color: #fff;
        width: 190px;
        text-align: center;
        margin-top: 10px;
        .photo {
            width: 60px;
            border-radius: 50%;
            border: 6px solid #eee;
            height: 60px;
            background: url(https://misc.360buyimg.com/mtd/pc/common/img/no_login.jpg) no-repeat;
            background-size: cover;
            margin: -15px auto 0;
            box-shadow: 3px 6px 25px #c3c3c3;
        }
    }

    .loginTip {
        padding: 7px;
        font-size: 12px;
        color: #aaa;
    }

    .loginOrRegist {
        font-size: 12px;
        color: #666;
        padding: 5px;
        span:last-child {
            margin-left: 4px;
        }
    }

    .newWelfare, .member {
        padding: 5px 10px;
        background: #fff;
        border: 0;
        border-radius: 15px;
        box-shadow: 1px 5px 10px rgba(0, 0, 0, .5);
        outline: 0;
        margin-top: 10px;
        font-size: 12px;
        cursor: pointer;
        transition: all .3s;
    }

    .newWelfare {
        color: #e30000;
    }

    .member {
        margin-left: 5px;
        color: #e5d790;
        background: #363634;
    }

    .member:hover, .newWelfare:hover {
        color: #fff;
        background-color: #e30000;
    }

    .news {
        font-size: 12px;
        margin-top: 10px;
        .title {
            color: #666;
            display: flex;
            justify-content: space-between;
            padding: 10px 20px;
            > span{
                cursor: pointer;
                &:first-child {
                    font-weight: 700;
                    font-size: 14px;
                    color: #333;
                }
                > i {
                    vertical-align: middle;
                }
            }
        }
        ul.newsList {
            border-bottom: 1px solid rgba(200, 200, 200, .3);
            padding-bottom: 12px;
            > li {
                line-height: 22px;
                padding: 0 5px;
                span {
                    color: #666;
                    display: inline-block;
                    cursor: pointer;
                }
                .newsType {
                    padding: 0 10px;
                    border-radius: 2px;
                    background: #f00;
                    color: #fff;
                    height: 20px;
                    line-height: 20px;
                    display: inline-block;
                }
                .newsContext {
                    width: 125px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    vertical-align: middle;
                    text-align: left;
                    margin-left: 5px;
                }
            }
        }
    }

    .toolsPanel {
        padding-top: 9px;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        overflow: hidden;
        > .detailInfo {
            height: 167px;
            background: #f00;
            position: absolute;
            top: 167px;
            width: 100%;
        }
        span {
            display: inline-block;
            position: relative;
            font-size: 12px;
            color: #d3be9b;
            padding-top: 16px;
            margin-top: 12px;
            flex: 0 0 25%;
            cursor: pointer;
            > i {
                position: absolute;
                left: 50%;
                top: 0;
                margin-left: -6px;
            }
        }
    }

</style>
<style>
    .swiper-pagination-bullets .swiper-pagination-bullet {
        background: rgba(0, 0, 0, 0) !important;
        border: 2px solid rgba(255, 255, 255, .8) !important;
        font-size: 20px;
    }

    .swiper-pagination-bullets .swiper-pagination-bullet-active {
        box-shadow: 1px 1px 10px #fff !important;
        background: rgba(255, 255, 255, .5) !important;
    }
</style>
