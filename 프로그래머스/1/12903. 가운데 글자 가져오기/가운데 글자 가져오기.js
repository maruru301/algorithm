function solution(s) {
    const mid = s.length / 2;
    
    if (s.length % 2) {
        return s[Math.floor(mid)]
    } else {
        return s.slice(mid - 1, mid + 1)
    }
}