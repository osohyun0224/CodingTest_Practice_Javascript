function solution(number) {
    var answer = 0;
    for (let i = 0; i < number.length; i++) {
        answer += parseInt(number[i], 10); 
    }
    return answer % 9; 
}
