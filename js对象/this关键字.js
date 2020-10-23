/**
this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，实际上
this的最终指向的是那个调用它的对象
 */

 //下面通过例子来说明：

 //定义一个构造函数如下：
 function fn0(){
    let user = "alan";
    console.log(this.user);
    console.log(this);

 }
fn0()//this指向global对象；



//定义另外一个构造函数如下：
function fn1(name){
    this.name = name;
    console.log(this.name);
    console.log(this);

 }
 var res0 = new fn1("alan");//this指向res0对象；
 console.dir(res0);//查看res0的内容
 var res1 = new fn1("wen");//this指向res1对象
 console.dir(res1);//查看res1的内容



 //定义一个对象如下：
 var obj0 = {
     user:"pretty",
     info:function(){
         console.log(this.user);
         console.log(this);
     }
     }
obj0.info();//this指向了obj0对象，因为是通过obj0对象调用了info方法（其实就是一个函数），所以指向了该对象


//定义另外一个对象如下：
var obj1 = {
    user:"pretty",
    nice:{
        attractive:100,
        info:function(){
            console.log(this.user);
            console.log(this);
        }
    }
    }
obj1.nice.info();//this指向了nice对象，由于nice属性对应的对象没有user属性，所以返回undefined
obj1.nice.info.call(obj1);//可以利用fn.call等来改变this的指向，这里this指向了obj1对象


//定义另外一个对象如下：
var obj1 = {
    user:"pretty",
    nice:{
        attractive:100,
        info:function(){
            console.log(this.user);
            console.log(this);
        }
    }
    }
var res = obj1.nice.info;
res();//this指向了global对象；