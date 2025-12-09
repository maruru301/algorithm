function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];
    
    const scores = patterns.map(p =>
        answers.filter((answer, i) => answer === p[i % p.length]).length
    );
    
    const max = Math.max(...scores);
    
    return scores.reduce((acc, score, i) => {
        if (score === max) acc.push(i + 1);
        return acc;
    }, []);
}