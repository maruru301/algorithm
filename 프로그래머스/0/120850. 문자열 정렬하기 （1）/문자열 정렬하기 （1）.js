function solution(my_string) {
    const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    
    return [...my_string].filter(str => num.includes(str)).map(n => parseInt(n)).sort((a, b) => a - b);
}