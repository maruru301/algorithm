function solution(myString, alp) {
    return [...myString].map(str => str == alp ? str.toUpperCase() : str).join('');
}