<template>
  <div id="app">
    <transition 
      @leave="handleLeave"
      :css="false"
    >
      <div class="advertise" :class="zoomAnimation" v-show="show">
        <div class="adContext">
          <i class="iconfont icon-guanbi" @click="hideAdd"></i>
        </div>
      </div>
    </transition>
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  import Velocity from 'velocity-animate'
  export default {
    name: 'app',
    components:{
      Header,
      Footer
    },
    data() {
      return {
        zoomAnimation:'',
        show: true
      }
    },
    mounted(){
      this.hideAdd();
    },
    methods: {
      hideAdd(){
        this.show = !this.show;
      },
      handleLeave(el, done){
        Velocity(el, 'stop');
        Velocity(el, 'slideUp');
      }
    },
  }
</script>

<style>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      text-align: center;
      min-width:1190px;
      margin: 0 auto;
      position: relative;
    }
    li{ list-style: none; }
    ul{  margin: 0; }
    a{ text-decoration: none; color: #666;}
    .advertise{
      width: 100%;
      background-color: #221a55;
      transition: all;
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
</style>