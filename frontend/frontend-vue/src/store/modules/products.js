import shop from '../../api/shop';

export default {
    namespaced: true,
    state:{
        all: [],
        tableCols:[]
    },
    getters:{

    },
    actions:{
        //1.获取所有的产品
        getAllProducts({commit}){
            shop.getProducts(products =>{
                commit('setProducts', products)
            })
        }
    },
    mutations:{
        //1.初始化产品列表
        setProducts(state, products){
            state.all = products;
        },
        //2.更新产品库存
        decrementProductInventory(state,{ id }){
            const product = state.all.find(product => product.id===id)
            product.inventory--
        }
    }
}