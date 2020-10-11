//1.字面值创建
var tom1 = {
    name:"tom",
    age:22
}
console.log(tom1);

//2.构造函数方式创建
function Person(name,age){
    this.name = name;
    this.age = age;
}
var tom2 = new Person("tom",20)
console.log(tom2);

//3.用基类object创建一个空的对象，然后给该对象添加属性
var tom3 = new Object();
tom3.name = "alan";
tom3.age = 23;
console.log(tom3);