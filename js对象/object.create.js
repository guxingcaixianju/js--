function Employee(name,positon){
    this.name = name;
    this.positon = positon;
    this.signIn = function(){
        console.log(this.name+"is a "+this.positon);
    }
}

Employee.prototype.age = 20;
Employee.prototype.printInfo = function(){
    console.log(this.name,this.positon,this.age);
}

var emp1 = new Employee("alan","student");
var emp2 = new Employee("wen","doctor");

//打印emp1发现没有打出原型属性，利用for in 可以打印出构造函数的原型属性
console.log(emp1);
for(key in emp1){
    console.log(key);
}


//object.creat()可以让一个对象继承自另外一对象，新的对象可以拥有它继承的对象的所有属性，
//并且还可以有自己特有的属性
aa = Object.create(emp1);
console.log(aa);
for(key in aa){
    console.log(key);
}
