function solution(lines) {
    const counts = {};
    
    for (const [start, end] of lines) {
        for (let i = start; i < end; i++) {
            counts[i] = (counts[i] || 0) + 1;
        }
    }
    
    // console.log(counts);
    
    // 겹친 구간만 세기 (2개 이상인 부분)
    let cnt = 0;
    for (const v of Object.values(counts)) {
        if (v >= 2) cnt++;
    }

    return cnt;
}