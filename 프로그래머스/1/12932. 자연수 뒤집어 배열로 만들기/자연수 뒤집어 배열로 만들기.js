function solution(n) {
    const numStr = n.toString();
    
    return [...numStr].reverse().map(el => Number(el));
}