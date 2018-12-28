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
                        <div class="shoppingCart">
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
                        <img src="https://m.360buyimg.com/babel/jfs/t1/22949/14/3036/56494/5c23632aE9f6f0a67/19e3effbbe480803.jpg"/>
                    </div>
                    <ul>
                        <li><a href="#"><img src="../assets/img/index1_1.jpg"/></a></li>
                        <li><a href="#"><img src="../assets/img/index1_2.jpg"/></a></li>
                        <li><a href="#"><img src="../assets/img/index1_3.jpg"/></a></li>
                    </ul>
                </div>
                <!-- 其他个人操作 -->
                <div class="personalOp">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"indexContainer",
        data() {
            return {
                mainNavList: ['秒杀','优惠券','会员','闪购','拍卖','migo时尚','migo超市','海囤全球','xxjinrong'],
                hotKeyWords:['好物好家电','米面杂粮','nova4','新年美妆','每99减100'],
                detailSorts:[]
            }
        },
        mounted(){
            // this.getSortDetails();
        },
        filters:{
            sortDetailTitle(value){
                if(value.indexOf('|')){
                    return value.split('|')[1].trim();
                }
                return '';
            }
        },
        methods: {
            getSortDetails() {//获取详细分类列表
                this.$jsonp.http('https://dc.3.cn/category/get',"GBK",{
                    callback:'callback'
                }).then((res)=>{
                    this.detailSorts = res.data;
                })
            }
        },
    }
</script>

<style scoped>
    .header,.banner{
        width: 1190px;
        margin: 0 auto;
        display: flex;
    }
    .header>.logo{
        width: 190px;
        height: 190px;
        background-color: #fff;
        color:#e30000;
        font-size: 40px;
        text-align: center;
        line-height: 190px;
        margin-top: -30px;
        box-shadow: 1px 1px 10px rgba(0,0,0,.1);
        border-bottom: 1px solid rgba(181, 176, 176, 0.2);
    }
    .search{
        padding-top: 50px;
        padding-left: 128px;
        display: flex;
    }
    .searchBox{
        position: relative;
    }
    .searchBox input{
        width: 500px;
        height: 36px;
        line-height: 36px;
        background: #fff;
        border: 0;
        outline: 0;
        padding-left: 5px;
        font-size: 16px;
        color:#666666;
    }
    .searchBox .searchIcon{
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
    .shoppingCart{
        width: 177px;
        margin-left: 88px;
        height: 36px;
        line-height: 36px;
        background: #fff;
        cursor: pointer;
    }
    .shoppingCart span{
        font-size: 14px;
        color: #e30000;
        position: relative;
    }
    .shoppingCart .goodsNum{
        position: absolute;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        background-color: #e30000;
        color:#fff;
        font-style: normal;
        border-radius: 50%;
        top: -7px;
        right: -21px;
    }
    .shoppingCart span i{
        font-size: 14px;
        font-weight: 600;
        margin-right: 3px;
    }
    .hotSearch{
        color: #999;
        font-size: 12px;
        text-align: left;
    }
    .hotSearch>span{
        display: inline-block;
        margin-top: 5px;
    }
    .hotSearch>span+span{
        margin-left: 10px;
    }
    .mainNav{
        height: 50px;
        line-height: 70px;
    }
    .mainNav>span{
        display: inline-block;
        padding: 0 20px;
        color: #666;
        cursor: pointer;
        transition: all .2s;
        font-size: 14px;
    }
    .mainNav>span:hover a{
        color: #e30000;
    }
    .banner{
        height: 480px;
    }
    .leftNav{
        width: 190px;
        background-color: #fff;
    }
    .banner .leftNav ul{
        text-align: left;
        padding-left: 10px;
    }
    .banner .leftNav li{
        height: 26px;
        line-height: 26px;
    }
    .banner .leftNav span{
        color: #666;
        display: inline-block;
        cursor: pointer;
        font-size: 14px;
        transition: all .3s
    }
    .banner .leftNav span>span:hover{
        color:#e30000;
    }
    .banner .leftNav i{
        font-size: 14px;
        padding: 0 2px;
    }
    .goodsShow{
        display: flex;
        padding: 10px;
        cursor: pointer;
    }
    .goodsShow>ul{
        margin-left: 10px;
    }
    .goodsShow>ul>li:hover img{
        opacity: .8;
    }
    .goodsShow>ul>li img{
        opacity: 1;
        transition: all .3s;
    }

</style>