<template>
  <div id="app">
    <ul>
      <li><router-link to="/">index</router-link></li>
      <li><router-link to="/tab11">tab11</router-link></li>
      <li><router-link to="/main">tab11</router-link></li>
    </ul>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        obj: {
          name:"dmm",
          age:"10"
        }
      }
    }
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        text-align: center;
    }
    li{
        list-style: none;
    }
</style>
