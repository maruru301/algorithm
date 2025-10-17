function solution(board) {
    const n = board.length;
    let safeCount = 0;
    
    // 주어진 지역이 안전한 지역인지 확인
    const isSafe = (row, col) => {
        for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
                const ny = row + dy;
                const nx = col + dx;
                if (board[ny]?.[nx] === 1) { // 지뢰 발견
                    return false;
                }
            }
        }
        return true; // 주변에 지뢰 없음
    };
    
    // 안전한 지역의 수
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) safeCount++;
        }
    }
    
    return safeCount;
}