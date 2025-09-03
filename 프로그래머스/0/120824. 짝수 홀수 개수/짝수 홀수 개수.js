function solution(num_list) {
    var answer = [];
    let even = 0, odd = 0;
    
    for(let num of num_list) {
        if(num % 2 === 0)
            even++;
        else
            odd++;
    }
    
    return [even, odd];
}