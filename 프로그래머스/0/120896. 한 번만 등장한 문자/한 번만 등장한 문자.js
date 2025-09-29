function solution(s) {
    const count = {};
    
    for (let ch of s) {
        count[ch] = count[ch] ? count[ch] + 1 : 1;
    }
    
    return Object.keys(count).filter(ch => count[ch] === 1).sort().join('');
}