<template>
    <div class="stockpileContext">
        <div class="container">
            <div class="leftPanel">
                <a href="" v-for="i in 10" :key="i" class="panelItem">
                    <div>
                        <img src="@/assets/img/storeItem1.png" alt=""/>
                    </div>
                </a>
                
            </div>
            <div class="rigthPanel">
                <a href="" v-for="i in 4" :key="i" class="panelItem">
                    <div>
                        <img src="@/assets/img/storeItem12.png" alt=""/>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    //新年囤货活动特辑模块
    export default {
        name:'stockpileContext'
    }
</script>

<style scoped>
    .stockpileContext{
        width: 1260px;
        height: 580px;
        background-image: url(~@/assets/img/storePic.png);
        background-size: cover;
    }
    .stockpileContext>.container{
        margin: 136px 29px;
        width: 100%;
        height: 430px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }
    .stockpileContext>.container>div{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .stockpileContext>.container>.leftPanel{
        width: 994px;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        align-items: center;
    }
    .stockpileContext>.container .panelItem{
        display: block;
        width: 185px;
        position: relative;
        transition: all .2s;
    }
    .stockpileContext>.container .panelItem div{
        transition: all .2s;
    }
    .stockpileContext .panelItem:hover{
        color: #f00;
    }
    .stockpileContext .panelItem:hover div{
        opacity: .8;
    }
    .stockpileContext .panelItem:hover img{
        opacity: 1;
    }
    .stockpileContext>.container .panelItem img{
        display: inline-block;
        width: 100%;
    }
    .stockpileContext>.container>.rightPanel{
        background: rgb(78, 59, 59);
    }
</style>