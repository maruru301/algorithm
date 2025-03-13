function solution(n) {
    let num = 1;
    
    while(num * 6 % n) {
        num++;
    }
    
    return num;
}