function solution(intStrs, k, s, l) {
    let result = [];
    
    for (let arr of intStrs)
        result.push(Number(arr.slice(s, s + l)));
    
    result = result.filter(x => x > k)
    
    return result;
}