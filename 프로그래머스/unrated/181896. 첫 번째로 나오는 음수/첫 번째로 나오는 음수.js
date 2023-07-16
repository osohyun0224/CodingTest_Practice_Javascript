function solution(num_list) {
    var answer = 0;
    for(let i=0; i<num_list.length;i++){
        if(num_list[i]<0) {
            answer=i; 
            break;
    }
        else{
            answer=-1;
        }
    }
    return answer;
}