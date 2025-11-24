function solution(nums) {
    const types = new Set(nums).size; // 중복 제거
    const max = nums.length / 2;

    return Math.min(max, types);
}