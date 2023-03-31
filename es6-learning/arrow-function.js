let sum1 = (num1, num2) => num1 + num2
let sum2 = num1 => num1 + 10

console.log([1, 2, 3].map(x => x * x));

let getNum = () => ({ a: 1, b: 2 })
console.log(getNum());

let sum3 = (num1, num2 = 2) => num1 + num2
console.log(sum3(1));
console.log(sum3(1, 3));