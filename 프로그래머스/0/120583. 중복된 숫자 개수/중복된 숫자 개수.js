function solution(array, n) {
    let result = 0;
    
    array.forEach(num => {
        if (num === n) result++;
    })
    
    return result;
}