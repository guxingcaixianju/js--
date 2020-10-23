//可以创建自定义的异步操作

//用new关键字创建一个promise对象
var promise = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("执行成功")
    },2000);
    var data =2;
    for(let j=0;j<100;j++){
        data = data+j;
    }
    console.log(data);
})
//用promise.then来调用promise执行成功后resolve中的结果
promise.then(value=>{
    console.log(value);
});
// //用promise.catch（）来捕获异常
promise.catch(error=>{
    console.log(error);
});
//上面value是回调参数，resolve中的值会被当做回调参数传递给value


