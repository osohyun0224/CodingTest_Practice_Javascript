function solution(num_str) {
    var answer = [];
    answer=num_str.split("").map(Number);
    let sum=answer.reduce((a,b)=>(a+b));
    return sum;
}