function solution(dots) {
    const xArr = [];
    const yArr = [];
    
    dots.forEach(dot => {
        const [x, y] = dot
        
        xArr.push(x);
        yArr.push(y);
    })
    console.log(xArr, yArr);
    
    const newX = new Set(xArr)
    const newY = new Set(yArr)
    
    const resultX = [...newX].sort((a, b) => b - a).reduce((a, b) => a - b);
    const resultY = [...newY].sort((a, b) => b - a).reduce((a, b) => a - b);
    
    return resultX * resultY;
}