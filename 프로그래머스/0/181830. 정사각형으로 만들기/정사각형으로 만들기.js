function solution(arr) {
    const rowLen = arr.length;  // 행의 수
    let colLen = arr[0].length;  // 첫 번째 행을 기준으로 열의 수 설정
    
    if(rowLen > colLen) {
        for(let i = colLen; i < rowLen; i++) {
            for(let j = 0; j < rowLen; j++) {
                arr[j].push(0);
            }
        }
    } else if(rowLen < colLen) {
        for(let i = rowLen; i < colLen; i++) {
            arr.push(new Array(colLen).fill(0));
        }
    }
    
    return arr;
}