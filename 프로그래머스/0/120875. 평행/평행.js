function solution(dots) {
    const [a, b, c, d] = dots;
    
    const calc = (a1, a2) => {
        return (a2[1] - a1[1]) / (a2[0] - a1[0])
    }
    
    if (calc(a, b) === calc(c, d)) return 1;
    if (calc(a, c) === calc(b, d)) return 1;
    if (calc(a, d) === calc(b, c)) return 1;
    
    return 0;
}