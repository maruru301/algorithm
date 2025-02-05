function solution(strArr) {
    
    let result = strArr.filter((el) => !(el.includes('ad')));
    
    return result;
}