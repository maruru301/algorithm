function solution(my_string, indices) {
    let str = my_string.split('');
    
    for(let i of indices) {
        str[i] = '';
    }
    
    return str.join('');
}