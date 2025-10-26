function solution(score) {
    const average = score.map(([en, math]) => (en + math) / 2);
    
    const sorted = [...average].sort((a, b) => b - a);
    
    const result = average.map(el => sorted.indexOf(el) + 1);
    
    return result;
}