function solution(num_list) {
    var answer = [];
    
    for(let i=num_list.length-1; i >= 0; i--) {
        answer.push(num_list[i]);
    }
    return answer;
}