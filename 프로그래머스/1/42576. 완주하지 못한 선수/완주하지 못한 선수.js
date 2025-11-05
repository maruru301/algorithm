function solution(participant, completion) {
    const obj = {};

    // 참가자 카운트
    participant.forEach(p => {
        obj[p] = (obj[p] || 0) + 1; // 없으면 0 + 1, 있으면 기존 값 + 1
    });

    // 완주자 1씩 감소
    completion.forEach(c => {
        obj[c]--;
    });
    

    // 남아있는 카운트가 1 이상인 사람 반환
    for (let key in obj) {
        if (obj[key] > 0) return key;
    }
}