function solution(myString) {
    return [...myString.toLowerCase()].map(str => str === 'a' ? str.toUpperCase() : str).join('');
}