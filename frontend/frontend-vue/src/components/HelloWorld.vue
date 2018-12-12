<template>
  <div class="hello">
    <p>count:  {{ count }}</p>
    <p>countAlias:  {{ countAlias }}</p>
    <p>countPlusLocalState:  {{ countPlusLocalState }}</p>
    <button @click="add">+</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  data() {
    return {
      localCount: 10
    }
  },
  props: {
    msg: String
  },
  computed:mapState({
    count: state => state.count,

    countAlias: 'count',

    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  }),
  methods: {
    add(){
      this.$store.commit('increment')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
