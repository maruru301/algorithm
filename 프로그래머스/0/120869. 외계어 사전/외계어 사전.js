function solution(spell, dic) {
    for (let str of dic) {
        const isMatch = spell.every(s => str.includes(s));
        if (isMatch) return 1;
    }
    return 2;
}