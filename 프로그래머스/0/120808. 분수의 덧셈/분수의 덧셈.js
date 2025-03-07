function solution(numer1, denom1, numer2, denom2) {
    // 분자의 합
    const numer = numer1 * denom2 + numer2 * denom1;
    // 공통 분모
    const denom = denom1 * denom2;
    
    // 최대공약수 구하기 (유클리드 호제법)
    const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
    
    // 분자와 분모를 최대공약수로 나눔(기약분수)
    return [numer / gcd(numer, denom), denom / gcd(numer, denom)];
}