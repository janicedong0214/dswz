module.exports = {
    //部署在域名下的子目录下
    publicPath: process.env.NODE_ENV === "production" ? "/test/" : "",
    lintOnSave: false,
    // 静态目录路径
    assetsDir: 'distVue',
    // 主页名称
    indexPath: 'index.html',
    
}