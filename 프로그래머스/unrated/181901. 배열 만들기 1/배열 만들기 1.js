function solution(n, k) {
    var answer = [];
    for(let i=1; i<=n;i++){
        for(let j=1; j<=(n/k) ; j++){
            answer[j]=j*k
        }
    }
    let ans = answer.shift();
    return answer;
}