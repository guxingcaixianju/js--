//函数里面再定义一个函数，内部函数可以访问外部函数的作用域，
//如果外部函数不暴露内部函数时，外部是不知道此函数的存在的，
//只能在自己的内部使用，形成一个私有函数

function chengji(a,b){
    function ji(x){
        return x*x;
    }
    return ji(a)+ji(b)
}
console.log(chengji(2,3));

//内部函数也可以作为返回值返回出去，这样整个外部函数就形成了高阶函数，
//也就是返回函数的函数
function person(){
    var name ="alan";
    function getName(){
        return name;
    }
    return getName;
}

var a =person();
console.log(a);
console.log(a());
//也可以用下面的方式调用
console.log(person()());