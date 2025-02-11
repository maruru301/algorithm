function solution(arr) {
    let reuslt = [...arr];
    let num = 1;
    
    while(arr.length > num) {
        num *= 2;
    }
        
    for(let i = 0; i < num - arr.length; i++) {
        reuslt.push(0);
    }
    
    return reuslt;
}