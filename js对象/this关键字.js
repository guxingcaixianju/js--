/**
 this关键字指代的是对象实例本身，可以用它来访问自己的属性
 */
var tom = {
    name:"alan",
    age:12,
    introInfo:function(){
        console.log("I am "+this.name+ " and I am "+this.age+" years old");
    }
}
tom.introInfo();
//当在外面为tom添加方法时，也可以利用this
tom.goToSchool= function(){
    console.log(this.name +" will go to school this fall");//但是当使用箭头函数时，将会出错，因为this指向的不是实例本身，而是global对象
}
tom.goToSchool();
//但是当在构造函数中利用箭头函数创建方法时，则this指向对象实例本身