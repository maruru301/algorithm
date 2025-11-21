function solution(phone_number) {
    const len = phone_number.length;
    
    const stars = (num) => {
        let star = '';
        
        for (let i = 0; i < num; i++) {
            star += '*'
        }
        
        return star
    }
    
    return stars(len - 4) + [...phone_number].splice(len - 4, len).join('');
}