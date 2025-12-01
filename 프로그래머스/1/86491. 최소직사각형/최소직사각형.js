function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    
    for (let size of sizes) {
        size.sort((a, b) => a - b);
        const [width, height] = size;
        
        if (width > maxWidth) maxWidth = width;
        if (height > maxHeight) maxHeight = height;
    }
    
    return maxWidth * maxHeight;
}