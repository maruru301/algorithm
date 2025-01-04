function solution(my_string, s, e) {
    let str = my_string.split('');
    let reverseStr = str.slice(s, e+1);
    str.splice(s, reverseStr.length, ...reverseStr.reverse());
    
    return str.join('');
    
}