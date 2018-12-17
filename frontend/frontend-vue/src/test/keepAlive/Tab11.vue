<template>
    <div>
        <h1>Tab111111111111111111</h1>
    </div>
</template>

<script>
    export default {
        name:"Tab11",
        created() {
            this.$loading.show("loading...............");
            setTimeout(() => {
                this.$loading.hide()
            }, 2000);
        },
    }
</script>

<style scoped>

</style>