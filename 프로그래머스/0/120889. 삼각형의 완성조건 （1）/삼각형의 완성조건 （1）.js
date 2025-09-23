function solution(sides) {
    const longSide = Math.max(...sides);
    const otherSidesSum = sides.reduce((a, b) => a + b) - longSide;
    
    return otherSidesSum > longSide ? 1 : 2;
}