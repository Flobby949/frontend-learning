var myLike = {
    0: 'sing',
    1: 'coding',
    length: 2
}
var likeArr = ['sing', 'coding']

function fn(name, ...args) {
    console.log(name);
    console.log(args);
}

fn('ES6',123,'hello')

// 解构剩余参数
const obj = { a: 1, b: 2, c: 3, d: 4, e: 5}
const {a, b, c, ...other} = obj
console.log(a);
console.log(other);

let arr = [1, undefined, new Date(), 3, 4, 5]
let [num1, num2, num3, ...otherNums] = arr
console.log(num1);
console.log(typeof num1);
console.log(num2);
console.log(typeof num2);
console.log(num3);
console.log(typeof num3);
console.log(otherNums);
console.log(typeof otherNums);
