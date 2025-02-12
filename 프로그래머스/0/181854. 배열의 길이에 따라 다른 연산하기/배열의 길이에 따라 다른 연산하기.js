function solution(arr, n) {
    let result = [];
    
    if(arr.length % 2 === 1) {
        result = arr.map((el, index) => {
            return index % 2 === 0 ? el + n : el;
        });
    } else {
        result = arr.map((el, index) => {
            return index % 2 === 1 ? el + n : el;
        });
    }
    
    return result;
}