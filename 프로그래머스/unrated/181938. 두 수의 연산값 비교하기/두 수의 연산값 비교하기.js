function solution(a, b) {
    var answer = 0;
    let answer1=Number(String(a)+String(b));
    let answer2=2*a*b;
    if( answer1 >= answer2){
        answer=answer1;
    }
    else{
        answer=answer2;
    }
    return answer; 
}