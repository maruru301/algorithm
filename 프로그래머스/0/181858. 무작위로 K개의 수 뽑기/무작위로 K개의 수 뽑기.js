function solution(arr, k) {
    let result = [];
    
    arr.forEach(el => {
        if(!result.includes(el))
            result.push(el);
    });
    
    while (result.length < k) {
        result.push(-1);
    }
    
    return result.slice(0, k);
}