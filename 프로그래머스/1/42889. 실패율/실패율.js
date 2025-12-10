function solution(N, stages) {
    const counts = Array(N + 1).fill(0);  // 1~N 스테이지 카운트

    // 각 스테이지에 멈춘 사람 수 카운트
    for (const stage of stages) {
        if (stage <= N) counts[stage]++;
    }

    let players = stages.length;
    const failRates = [];

    // 스테이지별 실패율 계산
    for (let i = 1; i <= N; i++) {
        const fail = counts[i] / players;
        failRates.push({ stage: i, rate: fail });

        players -= counts[i];  // 다음 스테이지로 갈 사람 감소
    }

    // 실패율 내림차순 정렬 후 스테이지만 반환
    return failRates
        .sort((a, b) => b.rate - a.rate)
        .map(v => v.stage);
}