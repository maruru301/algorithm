function solution(id_pw, db) {
    let result = '';
    
    const [id, pw] = id_pw;
    
    const matchResults = db.map(data => {
        if (data[0] === id && data[1] === pw) return 'login';
        else if (data[0] !== id) return 'fail';
        else if (data[0] === id && data[1] !== pw) return 'wrong pw'
    })
    
    result = matchResults.includes('login') 
        ? 'login' 
        : (matchResults.includes('wrong pw') ? 'wrong pw': 'fail')
    
    return result;
}