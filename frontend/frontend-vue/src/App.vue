<template>
  <div id="app">
      <!--<router-link to="/test">test1</router-link>-->
    <!-- <transition
      @leave="handleLeave"
    >
      <div class="advertise" :class="zoomAnimation" v-show="show">
        <div class="adContext">
          <i class="iconfont icon-guanbi" @click="hideAdd"></i>
        </div>
      </div>
    </transition> -->
    <router-view/>
  </div>
</template>

<script>
  import Velocity from 'velocity-animate'
  export default {
    name: 'app',
    data() {
      return {
        zoomAnimation:'',
        show: true
      }
    },
    mounted(){
      // this.hideAdd();
    },
    methods: {
      hideAdd(){
        this.show = !this.show;
      },
      handleLeave(el){
        Velocity(el, 'stop');
        Velocity(el, 'slideDown');
      },
      handleClick() {
        this.show = !this.show
      },
      handleVeforeEnter(el){
       el.style.opacity = 0
      },
      handleEnter(el, done){
        Velocity(el, 'slideUp');
      },
      handleAfterEnter(){
        // console.log('动画结束')
      }
    },
  }
</script>

<style>
    #app {
      font-family: Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,\\5B8B\4F53,sans-serif;
      text-align: center;
      min-width:1190px;
      margin: 0 auto;
      position: relative;
    }
    li{ list-style: none; }
    ul{  margin: 0; padding: 0;}
    a{ text-decoration: none; color: #666;}
    .advertise{
      width: 100%;
      background-color: #221a55;
      transition: all;
    }
    i {
      font-style: normal;
    }
    .advertise i{
      position: absolute;
      display: inline-block;
      width: 20px;
      height: 20px;
      background: rgba(255,255,255,.2);
      top: 0;
      right: 0;
      color: #333;
      line-height: 20px;
      cursor: pointer;
    }
    .adContext{
      position: relative;
      height: 80px;
      width: 1190px;
      margin: 0 auto;
      background: url(https://img30.360buyimg.com/da/jfs/t1/10234/16/6426/58381/5c21d6afE7ef9fff6/3a49fb8c4f2d47d7.jpg) no-repeat;
    }
    /*
    清除浮动
    */
    .clearfix:after{
      content: "";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }
    .clearfix {
      zoom: 1;
    }
    p{
      margin: 0;
    }
</style>