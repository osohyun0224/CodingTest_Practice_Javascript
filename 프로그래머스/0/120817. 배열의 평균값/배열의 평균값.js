function solution(numbers) {
    var answer = 0;
    // for(let i=0; i<numbers.length; i++){
    //     answer += numbers[i];
    // }
    //         answer= answer/numbers.length;
    answer+=numbers.reduce((a,b)=>a+b,0);
    answer=answer/numbers.length;
    return answer;
}