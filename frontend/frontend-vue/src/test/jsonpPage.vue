<template>
    <!-- 测试 -->
    <div>
        <div style="margin: 100px auto;">
            {{hotWords}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "jsonpPage",
        data() {
            return {
                hotWords: {}
            }
        },
        mounted() {
            this.getHotWords();
        },
        methods: {
            //获取热搜关键词
            getHotWords() {
                this.$jsonp.http("https://floor.jd.com/user/hotwords/get", "utf-8", {
                    callback:"callback11"
                }).then(res => {
                    this.hotWords = res
                })
            }
        }
    }
</script>

<style scoped>

</style>