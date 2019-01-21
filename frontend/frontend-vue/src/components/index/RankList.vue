<template>
    <div class="rankListContainer">
        <!--排行榜-->
        <div class="paihangbang">
            <BlockItem :itemInfo="itemInfos[0]" :isNeedControl="true" :isNeedTabControl="true">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="index in Math.ceil(paihangbangList.length/3)" :key="index">
                        <ul>
                            <li v-for="(item,id) in paihangbangList.slice((index-1)*3,(index-1)*3+3)" :key="id">
                                <!-- <img :src="item.img"/> -->
                                <span>{{item.ranking}}</span>
                                <span>{{item.desc}}</span>
                            </li>
                        </ul>
                    </swiper-slide>
                    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
                </swiper>
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
        name:'ranklist',
        components:{
            BlockItem
        },
        data() {
            return {
                itemInfos: [
                    {
                        title:"排行榜",
                        detail:"专属你的购物指南",
                        tabList:['粮油调味','大家电','饮料冲调','休闲食品','香水彩妆']
                    },
                    {
                        title:"会买专辑",
                        detail:"甄选优质好物"
                    },
                    {
                        title:"领券中心",
                        detail:"前往领券中心"
                    }
                ],
                swiperOption:{
                    pagination: {//分页器
                        el: '.paihangbang .swiper-pagination',
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '">'+Number(index+1)+'</span>';
                        },
                    },
                },
                paihangbangList:[
                    {
                        img:"./assets/rankingPic.jpg",
                        ranking:'1',
                        desc:"dsfdvfdafdscdsfdc"
                    },
                    {
                        img:"~@/assets/rankingPic.jpg",
                        ranking:'2',
                        desc:""
                    },
                    {
                        img:"~@/assets/rankingPic.jpg",
                        ranking:'3',
                        desc:""
                    },
                    {
                        img:"~@/assets/rankingPic.jpg",
                        ranking:'4',
                        desc:""
                    },
                    {
                        img:"~@/assets/rankingPic.jpg",
                        ranking:'5',
                        desc:""
                    },
                    {
                        img:"~@/assets/rankingPic.jpg",
                        ranking:'6',
                        desc:"dsfdvfdafdscdsfdc"
                    },
                    {
                        img:"~@/assets/rankingPic.jpg",
                        ranking:'7',
                        desc:""
                    },
                    {
                        img:"~@/assets/rankingPic.jpg",
                        ranking:'8',
                        desc:""
                    },
                    {
                        img:"~@/assets/rankingPic.jpg",
                        ranking:'9',
                        desc:""
                    },
                    {
                        img:"~@/assets/rankingPic.jpg",
                        ranking:'10',
                        desc:""
                    }
                ]
            }
        },
    }
</script>

<style scoped>
    .rankListContainer{
        display: flex;
        /* background-color:aqua; */
        width: 100%;
        height: 400px;
        justify-content: space-between;
    }
    .rankListContainer>div{
        width: 32.5%;
        background-color: #fff;
        border-radius: 5px;
        color: #333;
    }
</style>