function solution(s1, s2) {
    let count = 0;
    
    s1.forEach(el => {
        if (s2.includes(el)) count++;
    })
    
    return count;
}