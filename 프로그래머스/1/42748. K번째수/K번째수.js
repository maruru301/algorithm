function solution(array, commands) {
    let result = [];
    
    commands.forEach(command => {
        const [i, j, k] = command;
        let sortedArr = [];
        
        sortedArr = array.slice(i - 1, j).sort((a, b) => a - b);
        
        result.push(sortedArr[k - 1]);
    })
    
    return result;
}