function solution(n) {
    const isPrime = Array(n + 1).fill(true); // true로 초기화
    // 0과 1은 소수가 아님
    isPrime[0] = false;
    isPrime[1] = false;

	// √n 까지만 확인
    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false; // i의 배수는 소수가 아님
            }
        }
    }

	// 소수만 담아서 반환할 배열
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) primes.push(i);
    }

    return primes.length;
}