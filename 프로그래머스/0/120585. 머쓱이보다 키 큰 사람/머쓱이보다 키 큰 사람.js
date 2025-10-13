function solution(array, height) {
    const newArray = array.filter(el => el > height)
    
    return newArray.length;
}