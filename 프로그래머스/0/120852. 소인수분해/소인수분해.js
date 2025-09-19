function solution(n) {
    var result = [];
    let divisor = 2;
    
    while(n > 1) {
        if(n % divisor === 0) {
            result.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }
    return [...new Set(result)];
}