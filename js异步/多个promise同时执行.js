/*使用Promise.all可以使多个promise同时执行，返回一个大的promise，在所有的promise
执行完成之后，它会返回一个结果数组，分别是每个promise返回的值，
*/
p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(1);
    },1000)
});

p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(2);
    },2000)
});

p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(3);
    },1000)
});
//Promise.all([p1,p2,p3])会返回一个大的promise
Promise.all([p1,p2,p3]).then(values=>{
    console.log(values);
})