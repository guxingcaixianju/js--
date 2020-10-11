// //getters和setters可以让我们写一些逻辑，然后再将值返回出来或者赋给另外一个属性
// //get 和 set 关键字都要写在对象内,注意关键字后面没有冒号
var person = {
    firstName :"三",
    lastName :"张",
    //定义getter：用get关键字加上属性的名字
    get fullName(){ //get只读属性
        return this.lastName + this.firstName;
    },
    set fullName(fullName){//可写属性
        let [lastName,firstName] = fullName.split(",");
        this.lastName = lastName;
        this.firstName = firstName;

    }
};
console.log(person.fullName);
person.fullName = "li,si"
console.log(person.fullName);
console.log(person.lastName,person.firstName);

// var Obj = {
//     name: [],
//     set setVal(ev) {
//       this.name.push(ev)
//     },
//     get getVal() {
//       return this.name.join('-')
//     }
//   }
//   // 试验
//   Obj.setVal = 'shimh'
//   Obj.setVal = 'zhangsan'
//   console.log(Obj.getVal) // shimh-zhangsan
//   console.log(Obj.name) // ["shimh", "zhangsan"]