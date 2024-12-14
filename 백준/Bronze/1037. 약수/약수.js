const fs = require('fs');
const [n, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const inputArr = input.trim().split(' ').map(Number);

const max = Math.max(...inputArr);
const min = Math.min(...inputArr);

console.log(max * min);