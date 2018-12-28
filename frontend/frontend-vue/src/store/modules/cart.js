// // import shop from '../../api/shop'

// export default {
//     namespaced: true,
//     state: {
//         items: [],
//         checkoutStatus: null
//     },
//     //getters
//     getters: {
        
//     },
//     //actions
//     actions: {
//         //添加产品到购物车
//         addProductToCart({ state, commit}, product){
//             if(product.inventory > 0) {
//                 const cartItem = state.items.find(item => item.id === product.id)
//                 if(!cartItem){
//                     commit('pushProductToCart', {id: product.id})
//                 }else{
//                     commit('incrementItemQuantity', cartItem)
//                 }
//             }
//             //----------
//         }
//     },
//     //mutations
//     mutations: {
//         //1.添加产品到购物车
//         pushProductToCart (state, { id }) {
//             state.items.push({
//                 id,
//                 quantity:1
//             })
//         },
//         //2.添加购物车某产品数量
//         incrementItemQuantity(state, { id }){
//             const cartItem = state.items.find(item=>item.id === id)
//             cartItem.quantity++;
//         },
//         //3.设置购物车对象
//         setCartItems(state, { items }){
//             state.items = items
//         }
//     }
// }
