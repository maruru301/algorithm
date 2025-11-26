function solution(t, p) {
    let count = 0;
    const len = t.length - (p.length - 1); // 부분 문자열 개수
    
    for (let i = 0; i < len; i++) {
        const subStr = t.slice(i, i + p.length);
        
        if (Number(subStr) <= Number(p)) count++;
    }
    
    return count;
}