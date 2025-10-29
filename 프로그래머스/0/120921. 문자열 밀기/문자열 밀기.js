function solution(A, B) {
    let arr = [...A];
    let count = 0;
    
    if (A === B) return 0;
    
    for (let i = 0; i < A.length; i++) {
        let lastChar = arr.pop();
        
        arr.unshift(lastChar);
        
        count++;
        
        if (arr.join('') === B) return count;
    }
    
    return -1;
}