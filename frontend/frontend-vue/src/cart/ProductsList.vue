<template>
    <ul>
        <li v-for="product in products" :key="product.id">
            {{ product.title }}-${{ product.price }}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button @click="addProductToCart(product)"> 加入购物车 </button>
        </li>
    </ul>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    export default {
        computed:{
            ...mapState({
                products: state => state.products.all
            })
        },
        methods: {
            ...mapActions('cart',[
                'addProductToCart'  
            ])
        },
        created(){
            this.$store.dispatch('products/getAllProducts')
        }
    }
</script>

<style scoped>

</style>