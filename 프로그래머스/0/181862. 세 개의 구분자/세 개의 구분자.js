function solution(myStr) {
    let result = [];
    
    const separators = ['a', 'b', 'c'];
    
    separators.forEach(sep => {
        myStr = myStr.replaceAll(sep, ' '); // 'a', 'b', 'c'를 공백으로 변환
    });
    
    result = myStr.split(' ').filter(str => str); // 빈 문자열 제거
    
    return result.length ? result : ["EMPTY"];
}