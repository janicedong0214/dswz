import axios from 'axios'

const getList = function(){
    axios.post('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=s&json=1&p=3')
}
export default getList;
