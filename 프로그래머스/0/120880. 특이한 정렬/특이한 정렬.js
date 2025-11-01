function solution(numlist, n) {
    const gapObj = numlist.map(num => {
        return { num, gap: Math.abs(n - num) };
    });
    
    gapObj.sort((a, b) => {
        // 거리 같으면 큰 수 먼저
        if (a.gap === b.gap) return b.num - a.num;
        
        return a.gap - b.gap; // 거리 다르면 가까운 순
    });
    
    console.log(gapObj);
    
    return gapObj.map(el => el.num);
}