/**
 js中，实现继承首先需要一个父类，在js中实际上是没有类的概念，
 在ES6中class虽然很像类，但实际上只是ES5的语法糖而已
 */

//一、原型链继承 


// //父类：人
// function Person(){
//     this.head = "脑袋";
//     this.emtion = ["喜","怒"];
// }

// //子类：学生，继承了"人"这个类
// function Student(studentID){
//     this.studentID = studentID;
    
// }

// Student.prototype = new Person();

// //通过学生类实例化学生对象
// stu1 = new Student(10001);
// // console.dir(stu1);//查看stu1的内容
// // console.dir(Person);//查看stu1的内容
// // console.log(stu1.head);

// stu2= new Student(10002);
// // console.log(stu2.head);


// stu1.emtion.push("愁");
// console.log(stu1.emtion);//(3) ['哀', '乐', '愁']
// console.log(stu2.emtion);// ['喜', '怒']
// console.dir(stu1);

/**
 原型链继承特点总结：
 1.让一个构造函数的原型对象（新实例）等于另外一个构造函数的实例；
 2.新实例无法向父类构造函数传参；
 3.继承单一
 4.所有新实例都会共享父类原型对象的属性
 */


//二.借用构造函数继承

    // //父类：人
    // function Person () {
    //     this.head = '脑袋瓜子';
    //     this.emotion = ['喜', '怒', '哀', '乐']; //人都有喜怒哀乐
    //   }
    //   //子类：学生，继承了“人”这个类
    //   function Student(studentID) {
    //     this.studentID = studentID;
    //     Person.call(this);
    //   }
      
    //   //Student.prototype = new Person();
  
    //   var stu1 = new Student(1001);
    //   console.log(stu1.emotion); //['喜', '怒', '哀', '乐']
    //   console.dir(stu1);
  
    //   stu1.emotion.push('愁');
    //   console.log(stu1.emotion); //["喜", "怒", "哀", "乐", "愁"]
      
    //   var stu2 = new Student(1002);
    //   console.log(stu2.emotion); //["喜", "怒", "哀", "乐"]
    //   console.dir(stu2);

//三.组合继承

    //父类：人
    function Person () {
      this.head = '脑袋瓜子';
      this.emotion = ['喜', '怒', '哀', '乐']; //人都有喜怒哀乐
    }
    //将 Person 类中需共享的方法放到 prototype 中，实现复用
    Person.prototype.eat = function () {
      console.log('吃吃喝喝');
    }
    Person.prototype.sleep = function () {
      console.log('睡觉');
    }
    Person.prototype.run = function () {
      console.log('快跑');
    }
    //子类：学生，继承了“人”这个类
    function Student(studentID) {
      this.studentID = studentID;
      Person.call(this);
    }
    
    //Student.prototype = new Person();  //此时 Student.prototype 中的 constructor 被重写了，会导致 Student.constructor === Person
   //Student.prototype.constructor = Student;  //将 Student 原型对象的 constructor 指针重新指向 Student 本身
    console.dir(Student); 

    // var stu1 = new Student(1001);
    // console.log(stu1.emotion); //['喜', '怒', '哀', '乐']

    // stu1.emotion.push('愁');
    // console.log(stu1.emotion); //["喜", "怒", "哀", "乐", "愁"]
    
    // var stu2 = new Student(1002);
    // console.log(stu2.emotion); //["喜", "怒", "哀", "乐"]

    // stu1.eat(); //吃吃喝喝
    // stu2.run(); //快跑
    // console.log(stu1.constructor);  //Student
//四.原型式继承

//五.寄生式继承

//六.

