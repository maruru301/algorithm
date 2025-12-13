function solution(s) {
    if (s.length % 2 === 1) return 0; // 홀수인 경우 0 반환
    let result = 0;
    
    // 문자열 한 칸씩 회전
    for (let i = 0; i < s.length; i++) {
        let str = s.slice(i) + s.slice(0, i);
        const stack = [];
        let isValid = true; // 올바른 괄호 문자열인지 여부
        
        for (let ch of str) {
            // 여는 괄호면 스택에 저장
            if (ch === '(' || ch === '[' || ch === '{') stack.push(ch);
            // 닫는 괄호면 스택과 비교
            else {
                const curr = stack.pop();
                
                if (ch === ')' && curr === '(') continue;
                if (ch === ']' && curr === '[') continue;
                if (ch === '}' && curr === '{') continue;
                isValid = false;
                break;
            }
        }
        if (isValid && stack.length === 0) result++;
    }
    return result;
}