function solution(my_string, queries) {
    let str = my_string.split('');
    
    queries.forEach(([s, e]) => {
        let reverseStr = str.slice(s, e + 1);
        str.splice(s, reverseStr.length, ...reverseStr.reverse());
    });

    return str.join('');
}