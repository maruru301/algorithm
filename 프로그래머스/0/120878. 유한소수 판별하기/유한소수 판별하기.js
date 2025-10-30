function solution(a, b) {
    // a, b의 최대공약수(GCD) 구하기
    let gcd = 1;
    
    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i == 0 && b % i == 0) gcd = i;
    }
    
    // 분모의 약수를 2, 5로 나누기
    b /= gcd;
    
    // 분모를 2와 5로 각각 소인수 분해
    while (b % 2 == 0) b /= 2;
    while (b % 5 == 0) b /= 5;
    
    return b == 1 ? 1 : 2;
}