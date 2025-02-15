function solution(num_str) {
    let result = 0;
    
    num_str.split('').map(el => result += Number(el));
    
    return result;
}