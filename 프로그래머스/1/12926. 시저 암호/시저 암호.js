function solution(s, n) {
  return s
    .split("")
    .map((char) => {
      if (char === " ") return char;

      const code = char.charCodeAt(0);
      
      if (code >= 65 && code <= 90) {
        // 대문자
        return String.fromCharCode(((code - 65 + n) % 26) + 65);
      } else {
        // 소문자
        return String.fromCharCode(((code - 97 + n) % 26) + 97);
      }
    })
    .join("");
}
