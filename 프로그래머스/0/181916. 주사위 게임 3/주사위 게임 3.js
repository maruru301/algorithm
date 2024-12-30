function solution(a,b,c,d) {
    const nums = [a,b,c,d];
    const numsSet = new Set(nums);
  
	if(numsSet.size === 1) return 1111 * a;
  
	
    if (numsSet.size === 2) {
        const [p, q] = [...numsSet];
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] === nums[j]) {
                    count++;
                }
            }
        }
 
    if (count === 3) {
        let pCount = 0, qCount = 0;

        nums.forEach((n) => {
            n === p ? pCount++ : qCount++;
        });

        return pCount > qCount ? Math.pow(10 * p + q, 2) : Math.pow(10 * q + p, 2);
            } else if (count === 2) {
                return (p + q) * Math.abs(p - q);
            }
        }
  
  if(numsSet.size === 3){
     const [p, q, r] = [...numsSet];
        let pCount = 0, qCount = 0;
        nums.forEach((n) => {
            n === p && pCount++;
            n === q && qCount++;
        });
 
        if (pCount === 2) {
            return q * r;
        } else if (qCount === 2) {
            return p * r;
        } else {
            return p * q;
        }
  }
  return Math.min(...nums)
}