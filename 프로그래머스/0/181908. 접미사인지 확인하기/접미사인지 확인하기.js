function solution(my_string, is_suffix) {
    let result = 0;
    let str = [];
    
    for(let i = 0; i < my_string.length; i++) {
        str.push(my_string.substring(i));
        if (str[i] == is_suffix)
            result = 1;
    }
    
    return result;
}