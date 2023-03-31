var fun1 = function() {
    console.log(arguments);
}

fun1(1, 2, 3)

function fun2(...args) {
    console.log(args);
}
fun2(1, 2, 3)

// 没有构造方法
// var Foo = () => {}
// let foo = new Foo()