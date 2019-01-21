<template>
    <div class="blockItemContainer">
        <p class="itemTitle">
            <span>{{itemInfo.title}}</span>
            <i class="iconfont icon-xiayiyeqianjinchakangengduo-xianxingyuankuang"></i>
            <span>{{itemInfo.detail}}</span>
        </p>
        <div class="itemMain">
            <div v-if="isNeedControl">
                <div class="tabControl" v-if="isNeedTabControl">
                    <span v-for="(item,index) in itemInfo.tabList" :key="index" :class="index===currentTab?'current':''" @click="changePanel(index)">{{item}}</span>
                </div>
                <div class="slideContext">
                    <slot></slot>
                        <!-- <swiper-slide v-for="(item,index) in productList" :key="index">
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
                        </swiper-slide> -->
                </div>
            </div>
            <div v-else>
                <div class="staticContext">dsdddddddddd</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['itemInfo','isNeedControl','isNeedTabControl'],
        data() {
            return {
                currentTab: 0
            }
        },
        methods:{
            changePanel(index){
                this.currentTab = index;
            }
        }
    }
</script>

<style scoped>
    .blockItemContainer .itemTitle{
        text-align: left;
        padding: 10px;
    }
    .blockItemContainer .itemTitle>span:first-child{
        font-size: 20px;
    }
    .blockItemContainer .itemTitle>i{
        font-size: 30px;
        color: rgba(234, 54, 53, .8);
        vertical-align: middle;
        margin-left: 4px;
    }
    .blockItemContainer .itemTitle>span:last-child{
        color: #ccc;
        margin-left: 14px;
        font-size: 15px;
    }
    .staticContext{
        background: #0f0;
    }
    .blockItemContainer .tabControl{
        display: flex;
        justify-content: space-around;
        background-color: #f0f3ef;
        padding: 5px 0;
        font-size: 12px;
        color: #999;
    }
    .blockItemContainer .tabControl>span{
        cursor: pointer;
    }
    .blockItemContainer .tabControl .current{
        color: #e33333;
    }
    .slideContext{
        height: 320px;
    }
</style>