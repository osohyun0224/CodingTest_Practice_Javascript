function solution(my_string, alp) {
    var answer = '';
    let ans = my_string.split("");
    for(let i=0;i<ans.length;i++){
        if(ans[i]==alp){
            ans[i]=ans[i].toUpperCase();
        }
    }
    answer=ans.join('');
    return answer;
}