const jsonp = require('jsonp');

const getData = function () {
    jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=s&json=1&p=3&jsonpCallback=cb', {param:'jsonpCallback'}, (err, data) => {
        if (err) {
            // console.error(err.message);
        } else {
            // console.log(data);
        }
    });
}

export default getData;
