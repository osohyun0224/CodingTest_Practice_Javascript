function solution(n) {
    var answer = 0;
    let ans = new Array(n+1);
    if(n%2!=0){
       for(let i=1;i<n+1;i+=2){
           answer+=i;
       }
       } 
    else{
        for(let i=2;i<n+2;i+=2){
            answer+=Math.pow(i,2);
        }
    }    
    return answer;
}