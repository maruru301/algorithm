function solution(bin1, bin2) {
    const a = bin1.padStart(Math.max(bin1.length, bin2.length), '0');
    const b = bin2.padStart(Math.max(bin1.length, bin2.length), '0');
    
    let carry = 0;
    let result = [];
    
    for (let i = a.length - 1; i >= 0; i--) {
        const sum = Number(a[i]) + Number(b[i]) + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }
    
    if (carry) result = '1' + result;
    return result;
}