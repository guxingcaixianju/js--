var num1 = 10;
//自执行函数定义
(function(){
    var num1 = 20;
    console.log(num1);
})();
console.log(num1);