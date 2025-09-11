function solution(rsp) {
    // 가위 -> 2, 바위 -> 0, 보 -> 5
    const winRule = {
        '2': '0',
        '0': '5',
        '5': '2',
    }
    
    let result = '';
    
    for(let i of rsp) {
        result += winRule[i];
    }
    
    return result;
}