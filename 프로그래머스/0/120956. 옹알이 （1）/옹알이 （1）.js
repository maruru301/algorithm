function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    let result = 0;
    
    babbling.forEach(b => {
        let matchedLength = 0;
        
        words.forEach(word => {
            // 발음이 포함되면 길이 합산
            if (b.includes(word)) matchedLength += word.length; 
        });
        
        // 전체 문자열 길이와 같으면 카운트
        if (matchedLength === b.length) result++;
    })
    
    return result;
}