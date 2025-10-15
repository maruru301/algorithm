function solution(polynomial) {
    let xSum = 0;
    let numSum = 0;

    polynomial.split(' + ').forEach(el => {
        if (el.includes('x')) {
            const xCount = el === 'x' ? 1 : Number(el.replace('x', ''));
            xSum += xCount;
        } else {
            numSum += Number(el);
        }
    })
    
    if (xSum && numSum) return `${xSum === 1 ? '' : xSum}x + ${numSum}`;
    if (xSum) return `${xSum === 1 ? '' : xSum}x`;
    return `${numSum}`;
}