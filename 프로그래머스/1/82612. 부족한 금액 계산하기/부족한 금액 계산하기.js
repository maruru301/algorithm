function solution(price, money, count) {
    let result = 0;
    let totalPrice = 0;
    let addPrice = price;
    
    for (let i = 0; i < count; i++) {
        totalPrice += price;
        price += addPrice;
    }
    
    if (money - totalPrice < 0) result = (money - totalPrice) * (-1);

    return result;
}