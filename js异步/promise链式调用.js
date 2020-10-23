//promise链式调用
new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve(1);
    },2000);
}).then(value=>{
    console.log(value);
    //可以对回调进行一些操作
    return value+10; //返回一个promise对象
}).then(value=>{
    console.log(value);
    return value+20; //也可以为return new Promise(resolve=>{resolve(value+20)});
}).then(value=>{
    console.log(value);
});