const fs = require('fs');
const [n, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const inputArr = input.trim().split(' ').map(Number);

let max = inputArr[0];
let min = inputArr[0];

for (let i = 0; i < n; i++) {
    if (inputArr[i] > max) {
        max = inputArr[i];
    }
    if (inputArr[i] < min) {
        min = inputArr[i];
    }
}

console.log(max * min);
