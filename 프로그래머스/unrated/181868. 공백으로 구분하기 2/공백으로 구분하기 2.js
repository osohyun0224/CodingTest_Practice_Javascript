function solution(my_string) {
    var answer = my_string.split("");
    let str=[];
    answer=my_string.split(" ");
    for(let i=0;i<answer.length;i++){
        if(answer[i] !==""){
            str.push(answer[i]);
    } 
}
    return str;
}