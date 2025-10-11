function solution(n, numlist) {
    let result = [];
    
    result = numlist.filter(num => num % n === 0)
    
    return result;
}