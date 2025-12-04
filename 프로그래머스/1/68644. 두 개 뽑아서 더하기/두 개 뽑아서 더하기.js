function solution(numbers) {
    const numSet = new Set();
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            numSet.add(numbers[i] + numbers[j]);
        }
    }
    
    return [...numSet].sort((a, b) => a - b);
}