function solution(my_string) {    
    const str = my_string.split(' ');
    let result = Number(str[0]);
    
    for (let i = 1; i < str.length; i += 2) {
        const op = str[i];
        const num = Number(str[i + 1]);
        
        if (op === "+") result += num;
        else if (op === "-") result -= num;
    }
    
    return result;
}