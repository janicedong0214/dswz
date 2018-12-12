<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Test :data="obj" ref="test"/> -->
    <ProductsList/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import Test from './components/Test'
import ProductsList from './cart/ProductsList';
export default {
  name: 'app',
  data() {
    return {
      obj: {
        name:"dmm",
        age:"10"
      }
    }
  },
  components: {
    ProductsList
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
  margin-top: 60px;
}
</style>
