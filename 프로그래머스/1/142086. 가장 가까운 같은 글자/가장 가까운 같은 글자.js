function solution(s) {
  const lastIndex = {}; // 각 글자 마지막 등장 위치
  const result = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    const last = lastIndex[char] ?? -1; // 이전 등장 위치. 없으면 -1
    result.push(last === -1 ? -1 : i - last);

    lastIndex[char] = i; // 마지막 등장 위치 갱신
  }

  return result;
}