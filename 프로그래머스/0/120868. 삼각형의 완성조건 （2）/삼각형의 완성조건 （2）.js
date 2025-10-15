function solution(sides) {
    sides.sort((a, b) => a - b); // 오름차순
    const [a, b] = sides;
    
//     1) 가장 긴 변이 b 인 경우
//     b - a + 1 부터 b 까지 -> b - (b - a + 1) -> a + 1 개
    
//     2) 나머지 한 변이 가장 긴 변인 경우
//     b + 1 부터 a + b - 1 까지 -> (a + b - 1) - (b + 1) -> a - 2 개
    
//     총 합 = 2a - 1
    
    return 2 * a - 1;
}