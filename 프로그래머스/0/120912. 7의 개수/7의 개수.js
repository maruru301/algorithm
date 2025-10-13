function solution(array) {
    let result = 0;
    
    array.forEach(num => {
        const numArr = num.toString().split('');
        
        numArr.forEach(n => {
            if (n === '7')
                result++;
        })
    })
    
    return result;
}