function solution(rny_string) {
    return rny_string.split('').map(str => str === 'm' ? 'rn' : str).join('');
}