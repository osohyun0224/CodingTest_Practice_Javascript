function solution(n, k) {
    var answer = 0;
    if(n>=10){
        answer=n*12000+k*2000-parseInt(n/10)*2000;
    }
    if(n<10){
       answer=n*12000+k*2000
    }
    return answer;
}