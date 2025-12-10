function solution(N, stages) {
    let result = [];
    let players = stages.length;
    let stageMap = {};
    
    // 각 스테이지 번호를 0으로 초기화
    for (let i = 1; i <= N; i++) {
        stageMap[i] = 0;
    }
    
    // 실제 스테이지 도는 사람들 카운트
    stages.forEach(stage => {
        if (stage <= N) {
            stageMap[stage]++; // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수
        }
    });
    
    // 실패율 저장할 배열
    let failRates = [];
    
    // 실패율 계산
    for (let i = 1; i <= N; i++) {
        const fail = stageMap[i] / players;   // 실패율 계산
        
        failRates.push({ stage: i, rate: fail });
        
        players -= stageMap[i]; // 다음 스테이지의 분모 줄이기
    }
    
    // console.log(stageMap);
    // console.log(failRates);
    
    return failRates
    .sort((a, b) => b.rate - a.rate)  // 실패율 내림차순
    .map(item => item.stage);         // 스테이지만 반환
}