function solution(number, n, m) {
    var answer = 0;
    if(number%n==0 && number%m==0){
        answer=1;
    }
    else{
        answer=0;
    }
    return answer;
}