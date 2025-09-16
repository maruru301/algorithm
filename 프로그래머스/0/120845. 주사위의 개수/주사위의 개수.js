function solution(box, n) {
    var result = 1;
    
    for(let i = 0; i < 3; i++) {
        result *= Math.floor(box[i] / n);
    }
    
    return result;
}