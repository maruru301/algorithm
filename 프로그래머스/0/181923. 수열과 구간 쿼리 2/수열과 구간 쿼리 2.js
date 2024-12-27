function solution(arr, queries) {
    var answer = [];
    
    for(let [s, e, k] of queries) {
        let minNum = arr.slice(s, e + 1).filter(num => num > k);
        minNum.length ? answer.push(Math.min(...minNum)) : answer.push(-1);
    }
    
    return answer;
}