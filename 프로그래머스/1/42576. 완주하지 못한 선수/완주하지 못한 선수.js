function solution(participant, completion) {
    const map = new Map();

    // 참가자 카운트
    participant.forEach(p => map.set(p, (map.get(p) || 0) + 1));

    // 완주자 1씩 감소
    completion.forEach(c => map.set(c, map.get(c) - 1));
    
    // 남아있는 카운트가 1 이상인 사람 반환
    for (const [key, value] of map) {
        if (value > 0) return key;
    }
}