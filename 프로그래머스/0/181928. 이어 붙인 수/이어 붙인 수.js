function solution(num_list) {
    var answer = 0;
    
    let odd = '';
    let even = '';
    
    for (let num of num_list) {
        num % 2 === 0 ? (even += String(num)) : (odd += String(num))
        answer = parseInt(even) + parseInt(odd);
    }
    
    
    return answer;
}