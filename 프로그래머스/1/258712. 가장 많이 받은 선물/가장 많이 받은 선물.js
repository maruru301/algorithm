function solution(friends, gifts) {
    let n = friends.length;

    const nameMap = new Map();
    
    // 주고 받은 선물 기록 -> 2차원 배열
    const giftRecordTable = Array.from({ length: n }).map(() => new Array(n).fill(0));
    
    friends.forEach((name, idx) => {
        nameMap.set(name, idx);
    })
    
    // giftRecordTable에 선물 내역 저장
    gifts.forEach((giftInfo) => {
        const [giver, receiver] = giftInfo.split(' ');
        giftRecordTable[nameMap.get(giver)][nameMap.get(receiver)]++;
    })
    
    // 선물 지수
    const giveInfo = new Array(n).fill(0);
    const receiveInfo = new Array(n).fill(0);
    const giftRank = new Array(n).fill(0);
    
    // 선물 지수 계산
    for(let i = 0; i < n; i++) {
        giveInfo[i] += giftRecordTable[i].reduce((a, b) => a + b, 0); // 보낸 선물
        
        for(let j = 0; j < n; j++) {
            receiveInfo[i] += giftRecordTable[j][i];  // 받은 선물
        }
            giftRank[i] = giveInfo[i] - receiveInfo[i]; // 선물 지수: 보낸 선물 - 받은 선물
    }
    
    // 다음 달 받을 선물 수
    const nextMonthGift = new Array(n).fill(0);
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {

            const iToJ = giftRecordTable[i][j];
            const jToI = giftRecordTable[j][i];

            if (iToJ > jToI) nextMonthGift[i]++;
            else if (iToJ < jToI) nextMonthGift[j]++;
            else {
                // 선물 지수 비교
                if (giftRank[i] > giftRank[j]) nextMonthGift[i]++;
                else if (giftRank[i] < giftRank[j]) nextMonthGift[j]++;
            }
        }
    }
    
    console.log(nameMap);
    console.log(giftRecordTable);
    console.log(giveInfo);
    console.log(receiveInfo);
    console.log(giftRank);
    console.log(nextMonthGift);
    
    return Math.max(...nextMonthGift)
}