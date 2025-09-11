function solution(hp) {
    let count = 0;
    
    count += Math.floor(hp / 5);  // 장군 개미
    hp %= 5;

    count += Math.floor(hp / 3);  // 병정 개미
    hp %= 3;

    count += hp;                  // 일개미

    return count;
}