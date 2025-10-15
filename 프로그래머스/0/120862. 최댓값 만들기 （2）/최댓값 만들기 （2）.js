function solution(numbers) {
    const n = numbers.length;
    
    numbers.sort((a, b) => b - a);
    
    const case1 = numbers[0] * numbers[1]; // 가장 큰 두 수
    const case2 = numbers[n - 1] * numbers[n - 2]; // 가장 작은 두 수
    
    return Math.max(case1, case2);
}