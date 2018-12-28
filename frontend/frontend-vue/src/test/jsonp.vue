<template>
    <div>
        <ul>
            <li v-for="(item,index) in detailSorts" :key="index">
                <span v-for="(itemB,index) in item.s" :key="index"><i v-if="index>0">/</i>{{itemB.n | getTitle}}</span>
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
                if(value.indexOf('|')){
                    return value.split('|')[1].trim();
                }
                return '';
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