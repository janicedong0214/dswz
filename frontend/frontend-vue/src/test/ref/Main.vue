<template>
    <div id="main">
        <p>main component</p>
        <hr>
        <Sub ref="child"></Sub>
        <button @click="getVal">getData</button>
        <input v-model="data"/>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                {{ item.likes.color }}
            </li>
        </ul>
    </div>
</template>

<script>
    import Sub from './Sub'
    export default {
        name: "Main",
        data(){
            return{
                data:'0',
                list:[
                    {
                        age:1,
                        name:2,
                        likes:{
                            color:'#f00'
                        }
                    },
                    {
                        age:10,
                        name:20,
                        likes:{
                            color:'#fff'
                        }
                    }
                ]
            }
        },
        components:{
            Sub
        },
        methods:{
            getVal(){
                this.data = this.$refs.child.age
            }
        }
    }
</script>

<style scoped>

</style>