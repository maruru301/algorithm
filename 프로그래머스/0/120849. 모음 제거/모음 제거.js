function solution(my_string) {
    let result = '';
    const vowel = ['a', 'e', 'i', 'o', 'u']
    
    result = [...my_string].filter(str => !vowel.includes(str));
    
    return result.join('');
}