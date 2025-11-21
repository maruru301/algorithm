function solution(arr) {
    const min = Math.min(...arr);

    const result = arr.filter(el => el !== min)
    
    return result.length !== 0 ? result : [-1];
}