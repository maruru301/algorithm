function solution(my_string) {
    let result = 0;
    const numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    [...my_string]
        .filter(str => numArr.includes(str))
        .forEach(el => {
            result += Number(el);
        })
    
    return result;
}