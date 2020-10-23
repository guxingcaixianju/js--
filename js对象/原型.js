function employee(name,positon){
    this.name = name;
    this.positon = positon;
    this.signIn = function(){
        console.log(this.name+"is a "+this.positon);
    }
}
/*普通对象有__prototype__属性(隐式原型)，函数有prototype对象属性（显式原型），而函数也是对象，
所以它也有__prototype__属性

对象的隐式原型的值为其对应构造函数的显式原型的值
*/
var emp1 = new employee("alan","student");
// var emp2 = new Employee("wen","doctor");
console.log(emp1);
// console.log(emp2);


//通过构造函数的原型来定义其属性和方法，则由其new出的实例都继承这个属性和方法。
// Employee.prototype.age = 20;
// Employee.prototype.printInfo = function(){
//     console.log(this.name,this.positon,this.age);
// // }
// emp1.printInfo();
// emp2.printInfo();

console.log(emp1.__proto__);

