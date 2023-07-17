function solution(a, b) {
    var answer = 0;
    if(a%2!==0 && b%2!=0){
        answer=a**2+b**2;
    }
    else if(a%2==0 && b%2!=0){
        answer=2*(a+b);
    }
    else if(a%2!=0 && b%2==0){
        answer=2*(a+b);
    }
    else if(a%2==0 && b%2==0){
         answer=Math.abs(a-b);
    }
    return answer;
}