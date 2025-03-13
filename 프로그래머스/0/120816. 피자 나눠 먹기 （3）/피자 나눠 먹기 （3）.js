function solution(slice, n) {
    let result = Math.floor(n / slice);
    
    return n % slice ? result + 1 : result;
}