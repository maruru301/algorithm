function solution(arr, intervals) {
    let result = [];
    
    intervals.map(([a, b]) => {
        for(let i = a; i <= b; i++)
            result.push(arr[i]);
    });
    
    return result;
}