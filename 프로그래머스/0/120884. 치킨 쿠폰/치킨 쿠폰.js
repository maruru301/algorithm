function solution(chicken) {
    let count = 0;
    let coupon = chicken;
    
    while (coupon >= 10) {
        const newChicken = Math.floor(coupon / 10);
        count += newChicken;
        coupon = newChicken + (coupon % 10);
    }
    
    return count;
}