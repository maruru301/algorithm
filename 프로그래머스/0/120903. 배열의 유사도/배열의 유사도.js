function solution(s1, s2) {
    let result = 0;
    
    s1.forEach(el => {
        if (s2.includes(el)) result++;
    });
    
    return result;
}