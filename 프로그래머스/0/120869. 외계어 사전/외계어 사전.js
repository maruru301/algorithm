function solution(spell, dic) {
    for (let str of dic) {
        if (str.length !== spell.length) continue; // 단어 길이 다르면 패스
        
        const isMatch = spell.every(s => str.includes(s));
        if (isMatch) return 1;
    }
    return 2;
}