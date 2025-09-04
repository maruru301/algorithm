function solution(my_string, num) {
    let result = '';
    
    let arr = my_string.split('')
    
    result += arr.map(str => str.repeat(num)).join('');
    
    return result;
}