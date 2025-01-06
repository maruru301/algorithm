function solution(arr) {
    const start = arr.indexOf(2);
    const end = arr.lastIndexOf(2);
    
    if(start === -1)
        return [-1];
    
    return arr.slice(start, end + 1);
}