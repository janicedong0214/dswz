//interface

//1.接口中的类型检查属性，参数中必须存在，且类型一致
interface LabelledValue{
    label: string;
    size:number;
}
//2.接口中存在可选属性
interface LabelledValue2{
    label: string;
    size:number;
    age?:number;
    sex?:string
}


function printLabel(labelledObj:LabelledValue2){
    console.log(labelledObj.label)
}

let myObj = { size: 10, label: 'dhjfgjd'};
printLabel(myObj)