// 좌표가 -5 ~ 5 범위 안인지 체크
const isValidMove = (nx, ny) => {
    return nx >= -5 && ny >= -5 && nx <= 5 && ny <= 5;
}

const updateLocation = (x, y, dir) => {
    switch(dir) {
        case 'U':
            return [x, y + 1];
        case 'D':
            return [x, y - 1];
        case 'R':
            return [x + 1, y];
        case 'L':
            return [x - 1, y];
    }
}

function solution(dirs) {
    let x = 0, y = 0;
    const visited = new Set(); // 지나간 길 저장
    
    for (const dir of dirs) {
        const [nx, ny] = updateLocation(x, y, dir); // 이동 후 좌표
        
        if (!isValidMove(nx, ny)) { // 범위를 벗어나면 해당 이동 무시
            continue;
        }
        
        // 같은 길을 반대로 이동하는 경우도 중복으로 계산되지 않도록 함
        visited.add(`${x}, ${y} => ${nx}, ${ny}`);
        visited.add(`${nx}, ${ny} => ${x}, ${y}`);
        
        [x, y] = [nx, ny]; // 좌표 업데이트
    }
    
    return visited.size / 2; // 왕복 좌표를 저장했으므로 2로 나눔
}