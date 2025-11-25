function solution(n, m) {
    // 최대공약수
    function getGcd(a, b) {
        return b === 0 ? a : getGcd(b, a % b);
    }
    
    // 최소공배수
    function getLcm(a, b) {
        return (a * b) / getGcd(a, b);
    }
    
    return [getGcd(n, m), getLcm(n, m)];
}