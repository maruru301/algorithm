function solution(myString) {
    return [...myString].map(str => str.charCodeAt(0) < 108 ? str = 'l' : str).join('');
}