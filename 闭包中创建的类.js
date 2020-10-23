var a,b;
(function(){
  function A (arg1,arg2) {
    this.a = 1;
    this.b=2; 
  }

  A.prototype.log = function () {
    console.log(this.a);
  }
  a = new A();
  b = new A();
})()
a.log();
// 1
console.log(b.b);

