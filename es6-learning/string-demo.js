
// ES5
var a = 'hello'
var b = 123
console.log('a的值是：' + a + ',b的值是：' + b);

var str = '第一行内容\n' + '第二行内容\n' + '第三行内容\n'
console.log(str);

// 模板字符串
let name = 'zhang'
let school = 'njuit'
console.log(`学校:${school},姓名:${name}`);

let x = 5;
let y = 6;
console.log('x + y = ' + (x + y)); // ES5
console.log(`x + y = ${x + y}`); // ES6
const age = 20
console.log(`小明是：${age > 18 ? '成年人' : '未成年人'}`);

function isAudit(nameArr, age) {
    let s1 = nameArr[0]
    let info = ''
    if (age > 18) {
        info = age + '岁，成年'
    } else {
        info = age + '岁，未成年'
    }
    return `${s1}${info}`
}

let res = isAudit`小明今年${age}`
console.log(res);