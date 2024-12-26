function solution(numLog) {
    let result = '';
    
    for(let i=0; i<numLog.length; i++) {
        let num = numLog[i+1] - numLog[i];
        if (num == '1')
            result += 'w';
        else if (num == '-1')
            result += 's';
        else if (num == '10')
            result += 'd';
        else if (num == '-10')
            result += 'a';
    }
    
    return result;
}