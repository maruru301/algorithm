function solution(friends, gifts) {
    const n = friends.length;

    // nameMap에 이름 -> 인덱스 매핑
    const nameMap = new Map();
    friends.forEach((name, idx) => nameMap.set(name, idx));
    
    // 주고 받은 선물 기록 -> 2차원 배열
    const giftRecordTable = Array.from({ length: n }, () => new Array(n).fill(0));
    // giver가 receiver에게 선물을 준 횟수 기록
    gifts.forEach((gift) => {
        const [giver, receiver] = gift.split(' ');
        giftRecordTable[nameMap.get(giver)][nameMap.get(receiver)]++;
    });
    
    // 선물 지수 계산
    const giftRank = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        const give = giftRecordTable[i].reduce((sum, val) => sum + val, 0);  // 행의 각 열(column) 합
        const receive = giftRecordTable.reduce((sum, row) => sum + row[i], 0);  // 모든 행(row)에서 i번째 열 합
        giftRank[i] = give - receive;
    }
    
    // 다음달에 받을 선물 수
    const nextMonthGift = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            const iToJ = giftRecordTable[i][j];
            const jToI = giftRecordTable[j][i];
            
            if (iToJ > jToI) nextMonthGift[i]++;
            else if (iToJ < jToI) nextMonthGift[j]++;
            else {
                // 선물 지수 비교
                if (giftRank[i] > giftRank[j]) nextMonthGift[i]++
                else if (giftRank[i] < giftRank[j]) nextMonthGift[j]++
            }
        }
    }
    
    console.log(nameMap);
    console.log(giftRecordTable);
    console.log(giftRank);
    console.log(nextMonthGift);
    
    return Math.max(...nextMonthGift);
}