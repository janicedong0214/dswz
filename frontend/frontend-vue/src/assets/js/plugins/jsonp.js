//处理参数（字符串和对象之间的相互转化）
import qs from 'qs';

const jsonp = {
    http(baseUrl, charset, params={}){
        return new Promise((resolve, reject)=>{
            //创建script标签
            let script = document.createElement('script');
            //获取回调函数名
            let callbackName = params.callback || 'callback';
            //拼接参数
            let param = '?'+qs.stringify(params);

            script.src = baseUrl + param;
            script.charset = charset;
            script.id = "jsonpScript";
            //添加到最后
            document.body.appendChild(script);
            //触发回调函数
            window[callbackName] = function(response) {
                if(response.code === '0'){
                    resolve(response);
                }else{+
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
            let callback111 = document.getElementById("jsonpScript");
            if(callback111) {
                document.body.removeChild(callback111);
            }
        })
    }
}
export default jsonp;