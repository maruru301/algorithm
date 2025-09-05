function solution(emergency) {
    let result = [];
    
    result = [...emergency].sort((a, b) => b - a);
    
    return emergency.map(el => result.indexOf(el) + 1);
}