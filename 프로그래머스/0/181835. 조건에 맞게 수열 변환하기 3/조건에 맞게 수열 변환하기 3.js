function solution(arr, k) {
    let result = [];
    
    if(k % 2 === 1) {
        result = arr.map(el => el *= k)
    } else {
        result = arr.map(el => el += k)
    }
    
    return result;
}