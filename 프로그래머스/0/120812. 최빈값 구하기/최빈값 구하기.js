function solution(array) {
    const counting = new Map();
    
    // 숫자 등장 횟수 세기
    array.forEach(num => {
        if(counting.has(num)) {
            counting.set(num, counting.get(num) + 1)
        } else {
            counting.set(num, 1)
        }
    });
    
    let maxCount = 0;
    let mode = -1;
    let isDuplicate = false;

    // 최빈값 찾기
    for (let [num, count] of counting) {
        if (count > maxCount) {
            maxCount = count;
            mode = num;
            isDuplicate = false;
        } else if (count === maxCount) {
            isDuplicate = true;
        }
    }

    // 최빈값이 여러 개면 -1 반환
    return isDuplicate ? -1 : mode;
}