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

                </div>
                <!-- 中心轮播图 -->
                <div class="goodsShow"></div>
                <!-- 其他个人操作 -->
                <div class="personalOp"></div>
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
                hotKeyWords:['好物好家电','米面杂粮','nova4','新年美妆','每99减100']
            }
        },
        mounted(){
            
        }
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
    }
    .mainNav>span:hover a{
        color: #e30000;
    }
    .banner{
        height: 480px;
    }
</style>