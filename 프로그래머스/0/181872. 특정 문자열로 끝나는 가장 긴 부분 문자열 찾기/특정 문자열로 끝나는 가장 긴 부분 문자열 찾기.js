function solution(myString, pat) {
    let result = '';
    
    const idx = myString.lastIndexOf(pat) + pat.length;
    
    return myString.slice(0, idx);
}