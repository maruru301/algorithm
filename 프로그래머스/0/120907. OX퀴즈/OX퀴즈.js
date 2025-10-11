function solution(quiz) {
    let result = [];
   
    result = quiz.map(q => {
        let [x, op, y, eq, z] = q.split(" ");
        x = Number(x);
        y = Number(y);
        z = Number(z);
        
        if (op === '+') {
            return x + y === z ? 'O' : 'X';
        } else {
            return x - y === z ? 'O' : 'X';
        }
    });
    
    return result;
}