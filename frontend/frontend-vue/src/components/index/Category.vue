<template>
    <div class="categoryList">
        <ul @mouseenter="showDetails">
            <!-- <li>
                <span><span>家用电器</span></span>
            </li> -->
            <li v-for="(item,index) in detailSorts" :key="index">
                <span v-for="(itemB,index) in item.s" :key="index">
                    <i v-if="index>0" class="divideLine">/</i>
                    <span>{{itemB.n | sortDetailTitle}}</span>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                detailSorts: []
            }
        },
        created() {

        },
        mounted() {
            this.getSortDetails();
        },
        filters: {
            sortDetailTitle(value) {
                if (value.indexOf("|")) {
                    return value.split("|")[1].trim();
                }
                return "";
            }
        },
        methods: {
            //获取详细分类列表
            getSortDetails() {
                this.$jsonp.http("https://dc.3.cn/category/get", "gbk", {
                    callback: "callbackSortDetails"
                })
                .then(res => {
                    this.detailSorts = res.data;
                });
            },
            //显示子类别详情
            showDetails() {
                
            }
        },
    }
</script>

<style lang="scss" scoped>
.categoryList {
    width: 190px;
    background-color: #fff;
    ul {
        text-align: left;
        padding-left: 10px;
        li {
            height: 26px;
            line-height: 26px;
        }
    }
    span {
        color: #666;
        display: inline-block;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.3s;
        > span:hover {
            color: #e30000;
        }
    }
    i {
        font-size: 14px;
        padding: 0 2px;
    }
}
</style>