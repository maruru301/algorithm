function solution(rank, attendance) {
    const canAttendList = attendance
        .map((el, idx) => (el ? idx : -1))
        .filter(idx => idx !== -1);
    
    const sortedList = canAttendList
        .map(idx => ({ rank: rank[idx], idx })) // 등수와 인덱스를 함께 저장
        .sort((a, b) => a.rank - b.rank)
        .map(student => student.idx); // 정렬 후 인덱스만 추출
    
    const [a, b, c] = sortedList.slice(0, 3);
    
    return (10000 * a + 100 * b + c);
}