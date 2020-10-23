
let a = {name:"alan"};
let b = {age:10};
Object.setPrototypeOf(a,b);
console.dir(a);
console.log(a.__proto__ === b);