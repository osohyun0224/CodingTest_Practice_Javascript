function solution(order) {
    var answer = 0;
    for(let i=0; i<order.length;i++){
        if(order[i] == "iceamericano" || order[i] == "americanoice" || 
           order[i] == "hotamericano" || order[i] == "americanohot" || 
           order[i] == "americano" || order[i] == "anything") {
            answer += 4500;
        } else if(order[i] == "icecafelatte" || order[i] == "cafelatteice" || 
                  order[i] == "hotcafelatte" || order[i] == "cafelattehot" || 
                  order[i] == "cafelatte") {
            answer += 5000;
        }
    }
    return answer;
}
