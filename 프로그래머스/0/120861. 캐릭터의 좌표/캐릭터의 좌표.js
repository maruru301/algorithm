function solution(keyinput, board) {
    let x = 0, y = 0;
    
    const xLimit = (board[0] - 1)/2;
    const yLimit = (board[1] - 1)/2;
    
    keyinput.forEach(key => {
        let nextX = x;
        let nextY = y;
        
        if (key === 'up') nextY++;
        else if (key === 'down') nextY--;
        else if (key === 'left') nextX--;
        else if (key === 'right') nextX++;
        
        if (nextX <= xLimit && nextX >= -xLimit) x = nextX;
        if (nextY <= yLimit && nextY >= -yLimit) y = nextY;
        
        console.log([x, y]);
    })
    
    return [x, y];
}