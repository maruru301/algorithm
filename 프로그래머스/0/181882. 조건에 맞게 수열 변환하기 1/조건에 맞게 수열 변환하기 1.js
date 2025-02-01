function solution(arr) {
    let result = [];
    
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] >= 50 && arr[i] % 2 === 0)
            result[i] = arr[i]/2;
        else if (arr[i] < 50 && arr[i] % 2 != 0)
            result[i] = arr[i]*2;
        else
            result[i] = arr[i];
    }
    
    return result;
}