function solution(order) {
    let result = 0;
    
    order.forEach(el => el.includes('cafelatte') ? result += 5000 : result += 4500)
    
    return result;
}