const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let resultArr = [];
    
    for(let i=0; i<str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            resultArr.push(str[i].toLowerCase());
        } else {
            resultArr.push(str[i].toUpperCase());
        }   
    }
    
    console.log(resultArr.join(''))
});