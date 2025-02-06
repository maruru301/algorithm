function solution(myString, pat) {
    let rev_pat = pat.split('').map(el => el === 'A' ? 'B' : 'A').join('');
    return myString.includes(rev_pat) ? 1 : 0;
}