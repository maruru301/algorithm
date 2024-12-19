function solution(a, b) {
    var answer = 0;
    
    let result1 = String(a) + String(b);
    let result2 = String(b) + String(a);
    
    if (result1 < result2) {
        answer = parseInt(result2);
    } else {
        answer = parseInt(result1);
    }
    
    return answer;
}