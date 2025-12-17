function solution(progresses, speeds) {
    const result = [];
    const days = [];
    
    // 작업 별 배포 가능 날짜 구하기
    for (let i = 0; i < progresses.length; i++) {
        let p = progresses[i];
        let d = 0;
        
        while (p < 100) {
            p += speeds[i];
            d++;
        }
        
        days.push(d);
    }
    
    // 각 배포마다 몇 개의 기능이 배포되는지 구하기
    let baseDay = days[0];
    let count = 1;
    
    for (let i = 1; i < days.length; i++) {
        if (days[i] <= baseDay) {
            count++;
        } else {
            result.push(count);
            
            // 초기화
            baseDay = days[i];
            count = 1;
        }
    }
    
    result.push(count);
    
    return result;
}