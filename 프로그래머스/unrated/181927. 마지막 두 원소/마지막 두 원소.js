function solution(num_list) {
    var answer = [];
    if(num_list[num_list.length-1]>num_list[num_list.length-2]){
        let a = num_list[num_list.length-1] - num_list[num_list.length-2];
        num_list.push(a);
    }
    else{
        let a = num_list[num_list.length-1]*2;
        num_list.push(a);
    }
    return num_list;
}