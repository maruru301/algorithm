function solution(d, budget) {
    let sum = 0;
    let count = 0;
    
    const sortedD = d.sort((a, b) => a - b);
    
    sortedD.forEach(el => {
        if (sum + el <= budget) {
            sum += el;
            count++
        }
    })
    
    return count;
}