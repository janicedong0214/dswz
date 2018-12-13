//generator函数
//return Iterator 对象
function *helloWorldGenerator(){
    yield 'hello';
    yield 'world';
    return 'ending';
}

const h = helloWorldGenerator();
h.next();


