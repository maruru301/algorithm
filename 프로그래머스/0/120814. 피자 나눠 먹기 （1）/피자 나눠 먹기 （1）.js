function solution(n) {
    let result = Math.floor(n / 7);
    
    return n % 7 ? result + 1 : result;
}