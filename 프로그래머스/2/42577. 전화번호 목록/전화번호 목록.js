function solution(phone_book) {
    const map = new Map();
    phone_book.forEach(num => map.set(num, true));

    for (const num of phone_book) {
        for (let i = 1; i < num.length; i++) {
            if (map.has(num.slice(0, i))) return false;
        }
    }
    return true;
}