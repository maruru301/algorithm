function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    let result = 0;
    
    babbling.forEach(b => {
        let count = 0;
        
        words.forEach(word => {
            if (b.includes(word)) count += word.length;
        });
        
        if (count === b.length) result++;
    })
    
    return result;
}