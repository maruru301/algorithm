function solution(n, control) {
    let chars = control.split('');
    
    for(let i=0; i<control.length; i++) {
        if (chars[i] === 'w')
            n++;
        else if (chars[i] === 's')
            n--;
        else if (chars[i] === 'd')
            n += 10;
        else if (chars[i] === 'a')
            n -= 10;
    }
    
    return n;
}