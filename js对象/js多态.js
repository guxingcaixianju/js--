/**
 多态的实际定义：同一个操作作用于不同的对象上，可以产生不同的解释和不同的执行结果。
 例如：同样是叫声这个行为，猫和狗（两个对象）会产生不同的叫声，实际上符合js多态的特征，
 多态背后的思想是将“不变的事物”和“可变的事物”分离开来，上面的例子可以说明，
 动物都会叫，这是不变的，但是不同的动物怎么叫是可以变的，把不变的隔离开来，把可变的封装起来，这给予了我们
 扩展代码的能力
 */

 //实现多态可以通过构造函数的方式

 //不变的部分，都返回叫声
 function Behavior(){}
 Behavior.prototype.sound = function(sound){
     return sound
 }
function Dog(){}
Object.setPrototypeOf(Dog.prototype,Behavior.prototype)
var dog1 = new Dog();
console.log(dog1.sound("汪汪汪"));
function Cat(){}
Object.setPrototypeOf(Cat.prototype,Behavior.prototype);
cat1 = new Cat();
console.log(cat1.sound("喵喵喵"));

/**
 多态最常见的两种实现方式：覆盖和重载

 覆盖指的是子类重新定义父类方法，这正好就是基于prototype继承的玩法；

 重载是指多个同名但参数不同的方法，在js中确实没有这个语法概念，但是可以通过一定的方法实现
 */
