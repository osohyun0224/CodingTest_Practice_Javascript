function solution(num_list) {
    var answer = 0;
    let an1 =0;
    let an2=0;
    for(let i=0; i<num_list.length;i+=2){
        an1+=num_list[i];
    }
    for(let j=1; j<num_list.length;j+=2){
        an2+=num_list[j];
    }
    if(an1>=an2) answer=an1;
    else answer=an2;
    return answer;
}