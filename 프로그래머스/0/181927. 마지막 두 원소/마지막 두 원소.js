function solution(num_list) {
    let length = num_list.length;
    
    let last = num_list[length-1];
    let num;
    if (num_list[length-2] < last) {
        num = last - num_list[length-2];
        num_list.push(num);
    } else {
        num = 2 * last;
        num_list.push(num);
    }
    
    return num_list;
}