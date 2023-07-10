function solution(numbers, n) {
    var answer = 0;
    var sum =0;
    for(let i =0; i < numbers.length ; i++){
        sum+=numbers[i];
        if(sum>n){
            return sum;
        }
    }
    answer=sum;
    return answer;
}