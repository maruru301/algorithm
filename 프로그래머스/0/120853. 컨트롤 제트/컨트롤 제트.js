function solution(s) {
    const arr = [];
    let result = 0;
    
    let str = s.split(' ');
    
    str.forEach(v => {
        if (v === 'Z') arr.pop();
        else arr.push(v); 
    });
    
    arr.forEach(v => result += Number(v))
    
    return result;
}