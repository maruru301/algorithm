function solution(myString, pat) {
    let result = 0;
    
    let pos = myString.indexOf(pat);
    
    while(pos !== -1) {
        result++;
        pos = myString.indexOf(pat, pos + 1);
    }
    
    return result;
}