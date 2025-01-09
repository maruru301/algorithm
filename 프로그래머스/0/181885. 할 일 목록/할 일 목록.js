function solution(todo_list, finished) {
    let result = [];
    let falseList = [];
    
    for(let i = 0; i < finished.length; i++) {
        if(finished[i] === false) {
            falseList.push(i);
        }
    }
    
    for(let idx of falseList) {
        result.push(todo_list[idx]);
    }
    
    return result;
}