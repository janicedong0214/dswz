<template>
    <div class="secKill">
        <!--倒计时-->
        <div class="counter">
            <p>京东秒杀</p>
            <p>FLASH DEALS</p>
            <p><img src=""/></p>
            <p>本场距离结束还剩</p>
            <p></p>
        </div>
        <!--轮播图-->
        <div class="secKillList"></div>
        <!--其他-->
        <div class="secKillOthers"></div>
    </div>
</template>

<script>
//秒杀模块
    export default {
        name:"SecKill"
    }
</script>

<style scoped>
    .secKill{
        height: 300px;
    }
</style>