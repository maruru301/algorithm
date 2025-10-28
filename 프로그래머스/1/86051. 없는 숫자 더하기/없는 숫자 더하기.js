function solution(numbers) {
    const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    const result = numArr.filter(n => !numbers.includes(n));
    
    return result.reduce((a, b) => a + b, 0);
}