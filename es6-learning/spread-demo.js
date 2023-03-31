// 展开语法

// ES 5
// var arr1 = [0, 1 ,2]
// var arr2 = []
// var arr3 = [].concat(arr1)
// var arr4 = arr1.slice(0)
// arr1.forEach(function(value) {
//     arr2.push(value)
// })
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);
// arr1.push(3)
// console.log(arr1);
// console.log(arr3);
// console.log(arr4);

// ES 6
// let arr1 = [0, 1 ,2]
// let arr2 = [...arr1]
// console.log(arr1);
// console.log(arr2);
// arr1.push(3)
// console.log(arr1);
// console.log(arr2);

// const obj = {a: 1, b: 2}
// let copyObj = { ... obj }
// console.log(copyObj);

const arr = [...'hello']
console.log(arr.length);
console.log(arr);

function sum(x, y, z) {
    return x + y + z
}
let data = [1, 2, 3]
console.log(sum(...data));