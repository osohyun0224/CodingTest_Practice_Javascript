function solution(n, k) {
    var answer = 0;
    let sum1, sum2 = 0;
    let dri =0;
    sum1 = 12000*n;
    if(n>=10){
        dri=parseInt(n/10);
    }
    sum2 = (k-dri)*2000;
    answer=sum1+sum2;
    return answer;
}