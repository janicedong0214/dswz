<template>
    <div id="headerComponent">
        <div class="headerContext">
            <span class="location">
                <i class="iconfont icon-dingwei1"></i>shanghai
            </span>
            <ul class="nav clearfix">
                <li>
                    <span class="login" @click="toLogin">您好，请登录</span>
                    <span class="register">免费注册</span>
                </li>
                <li><span>我的订单</span></li>
                <li><span>我的migo<i class="iconfont icon-xiala"></i></span></li>
                <li><span>migo会员</span></li>
                <li><span>企业采购<i class="iconfont icon-xiala"></i></span></li>
                <li><span>客户服务<i class="iconfont icon-xiala"></i></span></li>
                <li><span>网站导航<i class="iconfont icon-xiala"></i></span></li>
                <li><span>手机京东</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name:"headerComponent",
        data(){
            return{
                
            }
        },
        methods: {
            //跳转到登录页面
            toLogin() {
                this.$router.push('/login');
            }
        }
    }
</script>

<style scoped>
    #headerComponent{
        background-color: #e3e4e5;
        color: rgba(102, 102, 102, .6);
        font-size: 12px;
    }
    #headerComponent .nav{
        margin-left: auto;
    }
    #headerComponent .nav li{
        float: left;
        cursor: pointer;
        transition: all .4s;
        padding: 0 13px;
        box-sizing: border-box;
        height: 20px;
        line-height: 20px;
    }
    #headerComponent .nav li+li{
        border-left: 1px solid rgba(204, 204, 204, .5);
    }
    #headerComponent .nav li:hover{
        color:#e33333;
    }
    .nav i{
       vertical-align: middle; 
    }
    .register{
        margin-left:10px;
        color:#e33333;
    }
    .headerContext{
        width: 1190px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        height: 30px;
        line-height: 30px;
        justify-content:space-around;
        padding: 5px;
        box-sizing: border-box;
    }
    .location{
        display: inline-block;
        margin-left: 200px;
        vertical-align: middle;
    }
    .location>i{
        color:#e33333;
        margin-right: 3px;
    }
    .login{
        vertical-align: middle;
    }
</style>