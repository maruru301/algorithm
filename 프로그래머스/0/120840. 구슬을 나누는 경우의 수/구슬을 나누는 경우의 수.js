function solution(balls, share) {
    if (share > balls - share) share = balls - share;
    
    let result = 1;
    
    for(let i = 1; i < share + 1; i++) {
        result *= balls--;  // 분자: n * (n-1) * ... * (n-r+1)
        result /= i;        // 분모: 1 * 2 * ... * r
    }
    
    return result;
}