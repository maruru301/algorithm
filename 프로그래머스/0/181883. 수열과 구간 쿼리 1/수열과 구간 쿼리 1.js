function solution(arr, queries) {
    let result = [];
    
    queries.map(([s, e]) => {
        for(let i = 0; i < arr.length; i++) {
            if(s <= i && i <= e)
                arr[i]++;
        }
    })
    
    return arr;
}