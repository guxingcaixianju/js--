/**
 call,apply,bind都是为了改变某个函数运行时的上下文而存在的，即改变this指向的方法，
 在这些方法中传入的第一个参数就将是this指向的对象。

 以call方法的调用为例说明其使用过程：fn.call(this,[param])
      函数fn通过原型链的查找机制，找到function.prototype上的call方法，
      当执行call方法的时候，内部处理了一些事情：
      1）首先把要操作的函数中的this关键字变为call方法第一个传递的实参；
      2）把call方法第二个及之后的实参获取到；
      3）把要操作的函数执行，并且把第二个以后传递进来的实参传递给函数;

在非严格模式下，第一个参数不传入参数或者第一个参数是null或undefined，this都指向global；
在严格模式下，第一个参数是谁，this就指向谁，包括null和undefined，如果不传入参数，this就是
undefined。
 */
function fn(){};

fn.prototype = {
    color:"red",
    printInfo:function(){
        console.log("my color is :"+this.color);
        console.log(this);
    }
}



let obj = {color:"blue"};
var apple = new fn();
fn.prototype.printInfo()//此时的this指向了fn的原型对象
apple.printInfo.call(obj);//此时的this指向了obj对象



