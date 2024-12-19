function solution(a, b) {
    var answer = 0;
    
    let result1 = parseInt(String(a) + String(b));
    let result2 = 2 * a * b;
    
    if(result1 < result2){
        answer = result2;
    } else {
        answer = result1;
    }
    
    return answer;
}