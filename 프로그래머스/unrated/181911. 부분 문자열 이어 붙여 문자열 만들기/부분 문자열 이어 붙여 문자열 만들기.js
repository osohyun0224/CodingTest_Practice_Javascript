function solution(my_strings, parts) {
    var answer = '';
    for(let i=0; i<my_strings.length;i++){
         let s = parts[i][0];
         let e = parts[i][1];
         answer+=my_strings[i].substring(s,e+1);
        }
    return answer;
}