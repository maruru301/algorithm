function solution(board, moves) {
    let removedDolls = 0;
    const stack = [];
    
    moves.forEach(move => {
        const col = move - 1; // 인덱스 보정
        
        for (let row = 0; row < board.length; row++) {
            if (board[row][col] !== 0) {
                const doll = board[row][col];
                board[row][col] = 0; // 0으로 바꾸기
                
                if (stack[stack.length - 1] === doll) {
                    stack.pop();
                    removedDolls += 2; // 인형 2개 제거
                } else {
                    stack.push(doll);
                }
                
                break; // 맨 위 하나만
            }
        }
    });
    
    return removedDolls;
}