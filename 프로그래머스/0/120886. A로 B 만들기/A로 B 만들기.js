function solution(before, after) {
    return [...after].sort().join('') === [...before].sort().join('') ? 1 : 0;
}