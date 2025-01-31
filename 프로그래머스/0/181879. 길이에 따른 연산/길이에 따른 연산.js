function solution(num_list) {
    let add = 0;
    let mul = 1;
    let result = 0;
    
    for(let i in num_list){
        if(num_list.length >= 11){
            add += num_list[i]
            result = add
        }else{
            mul *= num_list[i]
            result = mul
        }
    }
    return result    
}