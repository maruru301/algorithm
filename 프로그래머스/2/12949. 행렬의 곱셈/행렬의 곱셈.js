function solution(arr1, arr2) {
    let result = [];
    
    for (let i = 0; i < arr1.length; i++) { // arr1의 행
        const row = [];
        
        for (let j = 0; j < arr2[0].length; j++) { // arr2의 열
            let sum = 0;
            
            for (let k = 0; k < arr1[i].length; k++) { // 공통 길이 (arr1 열 = arr2 행)
                sum += arr1[i][k] * arr2[k][j]
            }
            row.push(sum);
        }
        result.push(row);
    }
    
    return result;
}