function solution(my_string, is_prefix) {
    let result = 0;
    let arr = [];
    
    for(let i = 0; i < my_string.length; i++) {
        arr.push(my_string.substring(0, i+1));
        if (arr[i] == is_prefix)
            result = 1;
    }
    return result;
}