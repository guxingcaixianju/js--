var obj = new Object();
obj.name = "alan";
Object.prototype.show = function(){
    console.log("nice");
}
obj.show();

function User(){};
aa = new User();
console.log(aa.__proto__==User.prototype);
console.log(Object.getPrototypeOf(User.__proto__)==Object.prototype);
console.dir(aa.__proto__);
console.dir(User.prototype);
