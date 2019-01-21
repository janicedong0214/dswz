<template>
    <div class="rankListContainer2">
        <!--排行榜-->
        <div class="paihangbang">
            <BlockItem :itemInfo="itemInfos[0]" :isNeedControl="true"/>
        </div>
        <!--会买专辑-->
        <div class="huimaizhuanji">
            <BlockItem :itemInfo="itemInfos[1]" :isNeedControl="false"/>
        </div>
        <!--领券中心-->
        <div class="lingquancenter">
            <BlockItem :itemInfo="itemInfos[2]" :isNeedControl="false"/>
        </div>
    </div>
</template>

<script>
    import BlockItem from './BlockItem'
    //产品排行
    export default {
        name:'ranklist2',
        components:{
            BlockItem
        },
        data() {
            return {
                itemInfos: [
                    {
                        title:"觅me",
                        detail:"探索生活"
                    },
                    {
                        title:"发现好物",
                        detail:"发现品质生活"
                    },
                    {
                        title:"会逛",
                        detail:"你想逛的都在这里"
                    }
                ]
            }
        },
    }
</script>

<style scoped>
    .rankListContainer2{
        display: flex;
        width: 100%;
        height: 400px;
        justify-content: space-between;
    }
    .rankListContainer2>div{
        width: 32.5%;
        background-color: #fff;
        border-radius: 5px;
        color: #333;
    }
</style>