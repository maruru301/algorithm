function solution(arr, flag) {
    let result = [];
    
    arr.forEach((el, idx) => {
        if(flag[idx]) {
            for(let i = 0; i < el * 2; i++)
                result.push(el);
        } else {
            for(let i = 0; i < el; i++) {
                result.pop();
            }
        }
    })
    
    return result;
}