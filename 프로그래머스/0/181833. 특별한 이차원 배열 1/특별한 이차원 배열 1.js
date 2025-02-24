function solution(n) {
    let result = Array(n);
    
    for(let i = 0; i < n; i++) {
        result[i] = new Array(n);
        
        for(let j = 0; j < n; j++) {
            result[i][j] = (i === j ? 1 : 0);
        }
    }
    
    return result;
}