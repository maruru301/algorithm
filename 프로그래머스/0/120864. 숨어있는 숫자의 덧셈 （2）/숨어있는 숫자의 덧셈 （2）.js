function solution(my_string) {
    let sum = 0;
    let numStr = '';

    for (let char of my_string) {
        if (char >= '0' && char <= '9') {
            numStr += char;
        } else {
            if (numStr) {
                // 문자를 만나면 모은 숫자 합계에 더하기
                sum += Number(numStr);
                numStr = '';
            }
        }
    }
    if (numStr) sum += Number(numStr);
    
    return sum;
}