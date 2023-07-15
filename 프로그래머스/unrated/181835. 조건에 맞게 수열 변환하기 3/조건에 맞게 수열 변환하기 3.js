function solution(arr, k) {
    var answer = [];
    if(k%2!=0){
        for(let i=0;i<arr.length;i++){
            answer.push(arr[i]*k);
        }
    }
    else if(k%2==0){
        for(let j=0;j<arr.length;j++){
            answer.push(arr[j]+k);
        }
    }
    return answer;
}