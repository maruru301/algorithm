function solution(array, n) {
    const gapArr = array.map(num => Math.abs(num - n));
    const minGap = Math.min(...gapArr);
    
    const minGapNums = array.filter((num, i) => gapArr[i] === minGap);
    
    return Math.min(...minGapNums);
}