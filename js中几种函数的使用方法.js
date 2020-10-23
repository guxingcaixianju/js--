/*
函数是JavaScript中很重要的一个语言元素，
并且提供了一个function关键字和内置对象Function，下面是其可能的用法和它们之间的关系。
*/ 

//使用方法一 函数表达式
var foo01 = function() //or fun01 = function()
{
     var temp = 100;
     this.temp = 200;
     return temp + this.temp;
}
console.log(typeof(foo01));
console.log(foo01()); 

//使用方法二
var foo02 = new function()
{
     var temp = 100;
     this.temp = 200;
     return temp + this.temp;
}

console.log(typeof(foo02));
console.log(foo02.constructor());   

//使用方法三 
//内置函数对象，这和方法一在效果和初始化优先级上都完全相同，就是函数体以字符串形式给出。
var foo3 = new Function('var temp = 100; this.temp = 200; return temp + this.temp;');
console.log(typeof(foo3));
console.log(foo3()); 

//使用方法四
var foo4 = Function('var temp = 100; this.temp = 200; return temp + this.temp;');
console.log(typeof(foo4));
console.log(foo4());
