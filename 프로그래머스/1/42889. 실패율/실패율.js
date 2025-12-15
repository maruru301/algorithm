function solution(N, stages) {
    let failRates = [];
    let players = stages.length;
    const stageMap = {}
    
    // 각 스테이지 번호 초기화
    for (let i = 1; i <= N; i++) {
        stageMap[i] = 0;
    }
    
    // 각 스테이지에 있는 유저 카운트
    stages.forEach(stage => {
        if (stage <= N) stageMap[stage]++;
    })
    
    // 실패율 계산
    for (let i = 1; i <= N; i++) {
        const fail = stageMap[i] / players;
        
        failRates.push({ stage: i, rate: fail });
        
        players -= stageMap[i];
    }
    
    return failRates
        .sort((a, b) => b.rate - a.rate) // 내림차순
        .map(el => el.stage); // 스테이지만 반환
}