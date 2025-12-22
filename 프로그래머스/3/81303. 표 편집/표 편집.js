function solution(n, k, cmd) {
    const result = Array(n).fill('O');
    const prev = Array(n).fill(null);
    const next = Array(n).fill(null);
    const removed = [];
    
    // 연결 리스트 초기화
    for (let i = 0; i < n; i++) {
        prev[i] = i - 1;
        next[i] = i + 1;
    }
    next[n - 1] = null;
    
    let current = k;
    
    for (const command of cmd) {
        const [c, x] = command.split(' ');
        
        if (c === 'U') {
            for (let i = 0; i < x; i++) {
                current = prev[current];
            }
        } else if (c === 'D') {
            for (let i = 0; i < x; i++) {
                current = next[current];
            }
        } else if (c === 'C') {
            removed.push(current);
            
            if (prev[current] !== null) next[prev[current]] = next[current];
            if (next[current] !== null) prev[next[current]] = prev[current];
            
            current = next[current] !== null ? next[current] : prev[current];
        } else if (c === 'Z') {
            const restore = removed.pop();
            
            if (prev[restore] !== null) next[prev[restore]] = restore;
            if (next[restore] !== null) prev[next[restore]] = restore;
        }
    }
    
    for (const r of removed) {
        result[r] = 'X';
    }
    
    return result.join('');
}