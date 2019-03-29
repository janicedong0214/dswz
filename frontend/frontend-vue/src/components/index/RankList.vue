<template>
    <div class="rankListContainer">
        <!--排行榜-->
        <div class="paihangbang">
            <BlockItem :itemInfo="itemInfos[0]" :isNeedControl="true" :isNeedTabControl="true" >
                <template slot-scope="slotProps">
                    <div v-for="(paihangbangItem,num) in paihangbangList" :key="num" v-show="num===slotProps.index" class="tabBox">
                        <swiper :options="swiperOption">
                            <swiper-slide v-for="index in Math.ceil(paihangbangItem.goodsList.length/3)" :key="index">
                                <ul>
                                    <li v-for="(item,id) in paihangbangItem.goodsList.slice((index-1)*3,(index-1)*3+3)" :key="id">
                                        <img :src="item.img"/>
                                        <span class="serialNumber">{{item.ranking}}</span>
                                        <span class="description">{{item.desc}}</span>
                                    </li>
                                </ul>
                            </swiper-slide>
                            <div class="swiper-pagination" slot="pagination"></div>
                        </swiper>
                    </div>
                </template>
            </BlockItem>
        </div>
        <!--会买专辑-->
        <div class="huimaizhuanji">
            <BlockItem :itemInfo="itemInfos[1]" :isNeedControl="true"></BlockItem>
        </div>
        <!--领券中心-->
        <div class="lingquancenter">
            <BlockItem :itemInfo="itemInfos[2]" :isNeedControl="true"></BlockItem>
        </div>
    </div>
</template>

<script>
    import BlockItem from './BlockItem'
    //产品排行
    export default {
        name: 'ranklist',
        components: {
            BlockItem
        },
        data() {
            return {
                itemInfos: [
                    {
                        title: "排行榜",
                        detail: "专属你的购物指南",
                        tabList: ['粮油调味', '大家电', '饮料冲调', '休闲食品', '香水彩妆']
                    },
                    {
                        title: "会买专辑",
                        detail: "甄选优质好物"
                    },
                    {
                        title: "领券中心",
                        detail: "前往领券中心"
                    }
                ],
                swiperOption: {
                    autoplay: true,
                    loop: true,
                    pagination: {//分页器
                        el: '.paihangbang .swiper-pagination',
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '"></span>';
                        },
                    },
                },
                paihangbangList: [
                    {
                        typeName:'11',
                        goodsList:[
                            {
                                img: "~@/assets/img/mac.jpg",
                                ranking: '1',
                                desc: "三只松鼠年货坚果大礼包1698g/1753g火红A版每日坚果送礼网红零食坚果礼盒（新老套餐随机发货）"
                            },
                            {
                                img: "~@/assets/rankingPic.jpg",
                                ranking: '2',
                                desc: "三只松鼠年货坚果大礼包1698g/1753g火红A版每日坚果送礼网红零食坚果礼盒（新老套餐随机发货）"
                            },
                            {
                                img: "~@/assets/rankingPic.jpg",
                                ranking: '3',
                                desc: "三只松鼠年货坚果大礼包1698g/1753g火红A版每日坚果送礼网红零食坚果礼盒（新老套餐随机发货）"
                            },
                            {
                                img: "~@/assets/rankingPic.jpg",
                                ranking: '4',
                                desc: "三只松鼠年货坚果大礼包1698g/1753g火红A版每日坚果送礼网红零食坚果礼盒（新老套餐随机发货）"
                            },
                            {
                                img: "~@/assets/rankingPic.jpg",
                                ranking: '5',
                                desc: "三只松鼠年货坚果大礼包1698g/1753g火红A版每日坚果送礼网红零食坚果礼盒（新老套餐随机发货）"
                            },
                            {
                                img: "~@/assets/rankingPic.jpg",
                                ranking: '6',
                                desc: "三只松鼠年货坚果大礼包1698g/1753g火红A版每日坚果送礼网红零食坚果礼盒（新老套餐随机发货）"
                            }
                        ]
                    },
                    {
                        typeName:'22',
                        goodsList:[
                            {
                                img: "/assets/img/mac.jpg",
                                ranking: '1',
                                desc: "三只松鼠年货坚果大礼包1698g/1753g火红A版每日坚果送礼网红零食坚果礼盒（新老套餐随机发货）"
                            },
                            {
                                img: "~@/assets/mac.jpg",
                                ranking: '2',
                                desc: "三只松鼠年货坚果大礼包1698g/1753g火红A版每日坚果送礼网红零食坚果礼盒（新老套餐随机发货）"
                            },
                            {
                                img: "~@/assets/mac.jpg",
                                ranking: '3',
                                desc: "三只松鼠年货坚果大礼包1698g/1753g火红A版每日坚果送礼网红零食坚果礼盒（新老套餐随机发货）"
                            },
                            {
                                img: "~@/assets/mac.jpg",
                                ranking: '4',
                                desc: "三只松鼠年货坚果大礼包1698g/1753g火红A版每日坚果送礼网红零食坚果礼盒（新老套餐随机发货）"
                            },
                            {
                                img: "~@/assets/mac.jpg",
                                ranking: '5',
                                desc: "三只松鼠年货坚果大礼包1698g/1753g火红A版每日坚果送礼网红零食坚果礼盒（新老套餐随机发货）"
                            },
                            {
                                img: "~@/assets/mac.jpg",
                                ranking: '6',
                                desc: "三只松鼠年货坚果大礼包1698g/1753g火红A版每日坚果送礼网红零食坚果礼盒（新老套餐随机发货）"
                            }
                        ]
                    }
                ]
            }
        },
        mounted() {
            this.getRankList1();
            this.getRankDetails();
        },
        methods: {
            //获取排行榜分类
            getRankList1() {
                this.$jsonp.http("https://ch.jd.com/homecate2", "utf-8", {
                    source:'pc',
                    callback:"jsonpTopCate"
                }).then(res => {
                    this.itemInfos[0].tabList = res.cateList;
                })
            },
            //获取排行详细列表
            getRankDetails() {
                this.$jsonp.http("https://ch.jd.com/homepro", "utf-8", {
                    source:'pc',
                    cateid:'5019',
                    callback:"jsonpTopRank0"
                }).then(res => {
                    console.log(res)
                })
            }

        }
    }
</script>

<style lang="scss" scoped>
    .rankListContainer {
        display: flex;
        width: 100%;
        height: 400px;
        justify-content: space-between;
        > div {
            width: 32.5%;
            background-color: #fff;
            border-radius: 5px;
            color: #333;
        }
        .paihangbang /deep/ {
            .swiper-container {
                height: 100%;
                ul {
                    height: 100%;
                    > li {
                        text-align: left;
                        display: flex;
                        padding: 9px 10px;
                        > * {
                            align-self: center;
                        }
                        .description {
                            display: inline-block;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            font-size: 12px;
                        }
                        > .serialNumber  {
                            font-size: 30px;
                            font-weight: 600;
                            margin: 0 15px;
                        }
                    }
                }
                /deep/ .swiper-pagination-bullets .swiper-pagination-bullet-active {
                    background-color: #f56c6c !important;
                    border: 1px solid rgba(245,108,108,.1) !important;
                    box-shadow: 1px 1px 10px rgba(245,108,108,.1) !important;
                }
                /deep/ .swiper-pagination-bullet{
                    /*display: inline-block;*/
                    border: 1px solid #000 !important;
                }
            }
        }
    }


</style>