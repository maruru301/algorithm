function solution(n) {
    let result = 0;
    
    result = [...n.toString()].sort((a, b) => b - a).join('');
    
    return Number(result);
}