function solution(my_string, index_list) {
    var answer = '';
    let ans = my_string.split("");
    for(let i=0;i<index_list.length;i++){
        answer+=ans[index_list[i]];
    }
    return answer;
}