function solution(n, control) {
    let ans=control.split("");
    for(let i=0;i<ans.length;i++){
        if(ans[i]=="w"){
            n+=1;
        }
        else if(ans[i]=="s"){
            n-=1;
        }
        else if(ans[i]=="d"){
            n+=10;
        }
        else if(ans[i]=="a"){
            n-=10;
        }
    }
    return n;
}