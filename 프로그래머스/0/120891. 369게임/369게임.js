function solution(order) {
    let result = 0;
    
    String(order).split("").forEach(n => {
        if ([3,6,9].includes(Number(n))) result++;
    });
    
    return result;
}