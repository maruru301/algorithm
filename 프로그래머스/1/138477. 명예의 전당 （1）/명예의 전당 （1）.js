function solution(k, score) {
    const result = []; // 발표 점수
    const kNums = []; // 명예의 전당
    
    for (let i = 0; i < score.length; i++) {
        kNums.push(score[i]);
        kNums.sort((a, b) => b - a); // 내림차순
        
        if (kNums.length > k) {
            kNums.pop();
        }
        
        result.push(kNums[kNums.length - 1]);
    }
    
    return result;
}