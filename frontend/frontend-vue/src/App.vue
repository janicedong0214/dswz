<template>
  <div id="app">
    <router-link to="/">index</router-link>&nbsp;&nbsp;&nbsp;
    <router-link to="/tab11">tab11</router-link>
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
</style>
