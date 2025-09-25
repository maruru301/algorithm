function solution(my_string) {
    let result = '';
    
    result = [...my_string].map(ch => {
        if (ch.charCodeAt() < 97) return ch.toLowerCase();
        else return ch.toUpperCase();
    })
    
    return result.join('');
}