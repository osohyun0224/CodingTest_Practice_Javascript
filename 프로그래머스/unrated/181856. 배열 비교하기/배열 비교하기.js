function solution(arr1, arr2) {
    var answer = 0;
    let a=arr1.length;
    let b=arr2.length;
    let sum1=0;
    let sum2=0;
    if(a>b) answer=1;
    else if(a<b) answer=-1;
    else if(a==b){
        for(let i=0; i<arr1.length;i++){
            sum1+=arr1[i];
        }
        for(let j=0; j<arr2.length;j++){
            sum2+=arr2[j];
        }
        if(sum1>sum2) answer=1;
        else if(sum1<sum2) answer=-1;
        else answer=0;
    }
    return answer;
}

