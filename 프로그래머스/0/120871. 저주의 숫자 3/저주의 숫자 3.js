function solution(n) {
    const number = [];
    let i = 1;

    while(number.length < n) {
        const strI = String(i);
        
        if (i % 3 !== 0 && !strI.includes('3')) number.push(i);
        
        i++;
    }
    
    return number[n - 1];
}