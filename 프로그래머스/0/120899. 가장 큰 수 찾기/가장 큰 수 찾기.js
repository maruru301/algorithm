function solution(array) {
    let max = array[0];
    
    array.forEach((num, idx) => {
        if (max < num) {
            max = num
        }
    })
    
    return [max, array.indexOf(max)];
}