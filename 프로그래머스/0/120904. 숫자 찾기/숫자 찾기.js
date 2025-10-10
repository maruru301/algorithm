function solution(num, k) {
    let result = 0;
    
    let n = num.toString().indexOf(k);
    
    return n === -1 ? -1 : n + 1;
}