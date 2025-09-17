function solution(n) {
    // 팩토리얼
    let factorial = (n) => {
        return n === 0 ? 1 : n * factorial(n - 1);
    }
    
    for (let i = 1; i <= 10; i++) {
        if (n < factorial(i)) return i - 1;
    }
    
    return 10;
}