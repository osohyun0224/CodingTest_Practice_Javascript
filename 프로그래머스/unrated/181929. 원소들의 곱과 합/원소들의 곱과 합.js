0;function solution(num_list) {
    var answer = 0;
    for(let i=0;i<num_list.length;i++){
        let mul= num_list.reduce((a,b)=>(a*b));
        let sum =num_list.reduce((a,b)=>(a+b));
        if(mul<sum*sum){
            answer=1;
        }
        else{
            answer=0;
        }
    }
    return answer;
}