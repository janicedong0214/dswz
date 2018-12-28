<template>
    <div class="cart">
        <h2>购物车</h2>
        <p>购物车是空的~</p>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.title }} - {{ product.price }} x {{ product.quantity }}
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters, mapState } from ''
    export default {
        computed: {
            ...mapGetters({
                products: 'cartProducts',
                total: 'cartTotalPrice'
            })
        }
    }
</script>

<style scoped>

</style>