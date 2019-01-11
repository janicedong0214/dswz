export default {
    render (createElement){
        const menu_items = ["首页","搜索","分类","系统"]
        return createElement('ul',{
            class:{'uk-nav':true}
        },menu_items.map(item=>createElement('li',item)))
    }
}