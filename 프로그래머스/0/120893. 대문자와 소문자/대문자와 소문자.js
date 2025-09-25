function solution(my_string) {
    let result = '';
    
    result = [...my_string].map(ch => {
        if (ch.charCodeAt() < 97) return String.fromCharCode(ch.charCodeAt() + 32);
        else return String.fromCharCode(ch.charCodeAt() - 32)
    })
    
    return result.join('');
}