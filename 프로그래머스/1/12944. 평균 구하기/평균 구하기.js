function solution(arr) {
    let sum = 0;
    
    arr.map(el => sum += el)
    
    return sum/arr.length;
}