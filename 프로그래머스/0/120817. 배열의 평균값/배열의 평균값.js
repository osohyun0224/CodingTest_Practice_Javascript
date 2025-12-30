function solution(numbers) {
    var answer = 0;
    for(let i=0; i<numbers.length; i++){
        answer += numbers[i];
    }
            answer= answer/numbers.length;
    return answer;
}