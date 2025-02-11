function solution(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return arr1.length < arr2.length ? -1 : 1;
    }
    
    let sum1 = 0, sum2 = 0;
    
    arr1.forEach(num => sum1 += num);
    arr2.forEach(num => sum2 += num);
    
    return sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : -1;
}