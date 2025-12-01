function solution(s) {
    return s.split(' ').map(str => (
        str.split('').map((el, idx) => 
            idx % 2 === 0 ? el.toUpperCase() : el.toLowerCase()
        ).join('')
    )).join(' ');
}