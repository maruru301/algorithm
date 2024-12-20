function solution(num_list) {
    let mul = 1;
    let sum = 0;
    
    for (let num of num_list) {
        mul *= num;
        sum += num;
    }
    
    if (mul < sum**2)
        return 1;
    else
        return 0;
}