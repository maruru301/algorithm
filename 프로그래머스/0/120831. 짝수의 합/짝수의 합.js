function solution(n) {
    let result = 0;
    
    for (let i = 1; i < n + 1; i++) {
        if (i % 2 === 0)
            result += i;
    }
    
    return result;
}