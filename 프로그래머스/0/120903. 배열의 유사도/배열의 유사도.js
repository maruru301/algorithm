function solution(s1, s2) {
    let result = 0;
    
    s1.forEach(el => {
        s2.includes(el) ? result++ : result
    })
    
    return result;
}