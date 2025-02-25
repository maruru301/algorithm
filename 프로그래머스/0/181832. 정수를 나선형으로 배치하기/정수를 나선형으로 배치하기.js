function solution(n) {
    let result = Array.from(Array(n), () => Array(n).fill(0));
    let start = 0, end = n - 1; // 시작점과 끝점
    let num = 1;    // 채울 숫자
    
    while(start <= end) {
        // 오른쪽으로
        for(let i = start; i <= end; i++) {
            result[start][i] = num++;
        }

        // 아래로
        for(let i = start + 1; i <= end; i++) {
            result[i][end] = num++;
        }
        
        // 왼쪽으로
        for(let i = end - 1; i >= start; i--) {
            result[end][i] = num++;
        }
        
        // 위로
        for(let i = end - 1; i > start; i--) {
            result[i][start] = num++;
        }
        
        start++;    //  한 칸 안쪽으로 이동
        end--;      // 범위 좁히기
    }
    
    return result;
}