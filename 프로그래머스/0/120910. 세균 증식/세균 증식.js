function solution(n, t) {
    let result = n; // 초깃값
    
    for (let i = 0; i < t; i++) {
        result *= 2;
    }
    
    return result;
}