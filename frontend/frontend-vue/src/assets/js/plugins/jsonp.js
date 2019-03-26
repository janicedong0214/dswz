//处理参数（字符串和对象之间的相互转化）
import qs from 'qs';

const jsonp = {
    install(Vue){
        Vue.prototype.$jsonp = this;
    },
    http(baseUrl, charset, params={}){
        return new Promise((resolve, reject)=>{
            //创建script标签
            let script = document.createElement('script');
            //拼接参数
            let param = '?'+qs.stringify(params);
            script.src = baseUrl + param;
            script.charset = charset;
            script.id = "jsonpScript";
            //添加到最后
            document.body.appendChild(script);
            //触发回调函数
            window.callback = function(response) {
                if(response.code == '0'){
                    resolve(response);
                }else{
                    reject(response);
                }
            }
        })
        .catch((error)=>{//不写浏览器报错（Uncought(in promise))
            if(error){
                return error;
            }
        })
        .finally(()=>{//最后删除script标签
            var callback111 = document.getElementById("jsonpScript");
            document.body.removeChild(callback111)
        })
    }
}
export default jsonp;