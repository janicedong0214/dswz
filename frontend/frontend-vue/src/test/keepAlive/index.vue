<template>
    <div id="index">
        <el-button type="text" @click="open5">点击打开 Message Box</el-button>
    </div>
</template>

<script>
    import getList from '../axios/index.js'
    export default {
        data() {
            return {
                activeName1: 'first',
                activeName2: 'tab11',
                activeName3: 'tab21',
                currentComponent:'Tab',
                currentIndex:'1',
            }
        },
        created(){
            getList();
            this.$loading.show('loading...');
            setTimeout(() => {
                this.$loading.hide();
            }, 3000);
        },
        methods: {
            handleClick(tab) {
                this.currentIndex = tab.index+1+'';
            },
            open5() {
                this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
                    dangerouslyUseHTMLString: true,
                    roundButton: true
                });
            }
        }
    }
</script>

<style scoped>
    
</style>