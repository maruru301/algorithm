function solution(arr) {
    let x = 0; // 반복 횟수
    let arr2 = arr;
    
    while(true) {
        const check = arr2.map(i => {
            if (i >= 50 && i % 2 === 0) 
                return i / 2;
            else if (i < 50 && i % 2 != 0)
                return i * 2 + 1;
            return i;
        })
    
        const isSame = arr2.every((i, el) => i === check[el]) // 기존 배열과 변환된 배열이 같은지 검사
        
        if(isSame) // 같다면 반복 종료
            break;
        
        x += 1; // 반복 횟수 증가
    
        arr2 = check // 변환된 배열을 기존 배열로 업데이트
    }
    
    return x;
}