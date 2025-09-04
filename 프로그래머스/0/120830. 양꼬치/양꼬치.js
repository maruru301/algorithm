function solution(n, k) {
    let service = Math.floor(n/10);
    let price = (12000 * n) + (2000 * k) - (2000 * service);
        
    return price;
}