function solution(a, b) {
    const isOddA = a % 2, isOddB = b % 2;
    
    if (isOddA === 1 && isOddB === 1)
        return a ** 2 + b ** 2;
    else if (isOddA === 1 || isOddB === 1)
        return 2 * (a + b);
    else
        return Math.abs(a - b);
}