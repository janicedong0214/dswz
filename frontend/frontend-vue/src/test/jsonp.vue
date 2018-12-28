<template>
    <div>
        <button @click="getData2">click</button>
        <ul>
            <li v-for="(item,index) in detailSorts" :key="index">
                <ul><!-- v-for="(itemB,index) in item.s" :key="index"-->
                    <li v-for="(itemMin,index) in item" :key="index">
                        {{ itemMin }}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Test',
        data(){
            return {
                data:[],
                detailSorts:null
            }
        },
        mounted(){
            this.getData2()
        },
        filters:{
            getTitle(value){
                // console.log(value)
                // let start = value.indexOf('|'),end = value.indexOf('||');
                // return value.substring(start,end);
            }
        },
        methods: {
            getData2() {
                this.$jsonp.http('https://dc.3.cn/category/get',"GBK",{
                    callback:'callback'
                }).then((res)=>{
                    this.detailSorts = res.data;
                })
            }
            // getData() {
            //     this.$jsonp.http('https://floor.jd.com/user/hotwords/get',"utf-8",{
            //         callback:'callback'
            //     }).then((res)=>{
            //         this.data = res.data;
            //     })
            // },
            // getData1() {
            //     this.$jsonp.http('https://floor.jd.com/recommend/news/get',"utf-8",{
            //         callback:'callback',
            //     }).then((res)=>{
            //         this.data = res.data;
            //     })
            // },
           
        },
    }
</script>

<style scoped>

</style>