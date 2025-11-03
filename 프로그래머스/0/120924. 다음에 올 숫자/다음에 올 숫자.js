function solution(common) {
    let isArithmetic = false;
    
    const commonDifference = (index1, index2) => common[index1] - common[index2]; // 공차
    const commonRatio = common[1] / common[0]; // 공비
    
    const length = common.length
    
    if (commonDifference(1, 0) === commonDifference(2, 1)) isArithmetic = true;
    
    return isArithmetic ? (
        // 등차수열일 경우
        common[length - 1] + commonDifference(1, 0)
    ) : (
        // 등비수열일 경우
        common[length - 1] * commonRatio
    )
}