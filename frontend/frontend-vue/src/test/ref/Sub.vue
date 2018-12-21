<template>
    <div id="sub">
        <h4>child</h4>
        please input your age: <input type="text" v-model="age"/>
    </div>
</template>

<script>
    export default {
        name: "Sub",
        data(){
            return{
                age:0
            }
        }
    }
</script>

<style scoped>

</style>