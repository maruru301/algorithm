function solution(picture, k) {
    let result = [];
    
    picture.forEach(row => {
        const repeat = [...row].map(str => str.repeat(k)).join('');
        for(let i = 0; i < k; i++) {
            result.push(repeat)
        }
    })
    
    return result;
}