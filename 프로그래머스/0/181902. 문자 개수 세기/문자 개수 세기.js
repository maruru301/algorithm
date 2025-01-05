function solution(my_string) {
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = Array(52).fill(0);
    
    for (let i = 0; i < my_string.length; i++) {
        result[alpha.indexOf(my_string[i])]++;
    }
    
    return result;
}