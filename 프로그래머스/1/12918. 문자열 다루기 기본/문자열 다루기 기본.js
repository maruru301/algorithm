function solution(s) {
    if (s.length !== 4 && s.length !== 6) return false;
    
    return [...s].every(ch => ch >= '0' && ch <= '9');
}