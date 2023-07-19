function solution(str_list, ex) {
    var answer = '';
    for(let i=0; i<str_list.length;i++){
        if(str_list[i].includes(ex)){
            continue;
        }
        answer+=str_list[i];
    }
    return answer;
}