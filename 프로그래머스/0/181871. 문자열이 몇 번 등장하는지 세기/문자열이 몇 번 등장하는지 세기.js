function solution(myString, pat) {
    let result = 0;
    
    let idx = myString.indexOf(pat);
    
    while(idx !== -1) {
        result++;
        idx = myString.indexOf(pat, idx + 1);
    }
    
    return result;
}