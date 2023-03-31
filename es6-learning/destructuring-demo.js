// 解构赋值

// 1. 数组解构赋值
// let arr = [1, 2, 3]
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// let [a, b, c] = [1, 2, 3]
// console.log(a);
// console.log(b);
// console.log(c);

// // 带默认值
// let [d = 9, e = 10] = [1]
// console.log(d);
// // 保留原值
// console.log(e);


// let [f, g=10] = [10, 'hello']
// console.log(f);
// console.log(g);

// let [x, y=1] = [10, undefined]
// console.log(x);
// console.log(y);


// let { a = 10, b = 5 } = { a: 3, b: null }

// 重命名赋值
let { a: x = 10, b: y = 5 } = { a: 2 }
// console.log(a);
// console.log(b);
console.log(x);
console.log(y);

// 解构字符串
const [a, b, c] = 'xyz'
console.log(a + "," + b + "," + c);

let { length: len } = 'hello'
console.log(len);

// 复杂类型解构
let data = {
    code: 1,
    list: [
        {
            name: 'zhang',
            age: 23
        },
        {
            name: 'li',
            age: 24
        }
    ]
}

let {
    code: newCode,
    list: [{
        name: newName,
        age: newAge
    }]
} = data
console.log(newCode);
console.log(newName);
console.log(newAge);