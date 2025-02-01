function solution(num_list) {
    let result = 0;
    
    if(num_list.length >= 11) {
        for(let num of num_list)
            result += num;
    } else {
        result = 1;
        for(let num of num_list)
            result *= num;
    }
        
    return result;
}