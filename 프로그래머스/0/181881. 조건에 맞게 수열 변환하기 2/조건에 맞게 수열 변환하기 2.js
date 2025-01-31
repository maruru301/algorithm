function solution(arr) {
    var arrBefore = [...arr];
    var cnt = 0;
    while(true){
        var arr = arrBefore.map((e)=> e >= 50 && e % 2 == 0 ? e / 2 :  e < 50 && e % 2 == 1 ? e * 2 + 1 : e);
        if(JSON.stringify(arr) == JSON.stringify(arrBefore)) break;
        arrBefore = arr;
        cnt++;
    }
    return cnt;
}