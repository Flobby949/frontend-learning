// 必须初始化
// const PI;
// PI = 3.14;

// 对象，数组等 引用类型,可以修改值，但不能修改引用
const obj = {
    a: 12
}
console.log(obj);
obj.a = 14
console.log(obj);
// 不能修改引用
// obj = []
// console.log(obj);

// 异步
for(var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000 * i);
}
// 3 3 3
for(let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000 * i);
}
// 0 1 2