function solution(i, j, k) {
    let result = 0;
    const target = String(k);
    
    for (let n = i; n < j + 1; n++) {
        const numStr = String(n);
        
        for (const ch of numStr) {
            if (ch === target) result++;
        }
    }
    
    return result;
}