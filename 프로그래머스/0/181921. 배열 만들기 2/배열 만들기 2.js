function solution(l, r) {
    let result = [];
    for(let i = l; i <= r; i++) {
        // 문자열로 바꾼 후 검사. 5와 0만 있을 경우 push
        if([...String(i)].every((num) => num === '0' || num === '5'))
            result.push(i);
    }
    // 0과 5로만 이루어진 정수가 없다면 -1 반환
    return result.length > 0 ? result : [-1];
}