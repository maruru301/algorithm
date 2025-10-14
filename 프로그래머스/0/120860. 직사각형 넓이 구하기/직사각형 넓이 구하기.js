function solution(dots) {
    const xArr = dots.map(dot => dot[0]);
    const yArr = dots.map(dot => dot[1]);
    
    const width = Math.max(...xArr) - Math.min(...xArr);
    const height = Math.max(...yArr) - Math.min(...yArr);

    return width * height;
}