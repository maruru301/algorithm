function solution(num_list) {
    return num_list.reduce((a,c)=>a+one(c),0);

    function one(num) {
        let count = 0;
        while(num > 1){
            num%2===0? num = num/2: num = (num-1)/2;
            count++
        }
        return count;
    }
}