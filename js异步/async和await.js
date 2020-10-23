//用同步代码的样式执行异步
async function async1(){
    console.log(1);
    //await关键字必须在async关键字的函数中进行调用
    let res1 = await async2();
    let res2 = await async3();
    console.log(res1);
    console.log(res2);
}


// console.log(async1);//打印函数内容
// console.log(async1());//Promise {<resolved>: undefined}
// console.log(typeof async1());//object
// console.log(typeof async1);//function
async function async2(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(100);
        },1000);
    })
}
async function async3(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(80);
        },500);
    })
}
async1();