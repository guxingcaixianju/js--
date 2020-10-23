let hd = {name:"hd"};
let parent = {
    name:"parent",
    show(){
        console.log("nice");
    }
}

Object.setPrototypeOf(hd,parent);//设置parent为父亲，hd为儿子
hd.show();
parent.show();