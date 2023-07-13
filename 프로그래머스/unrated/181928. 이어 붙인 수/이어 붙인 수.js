function solution(num_list) {
    let sol = num_list.filter(el=>(el%2===1));
    let sol2 = num_list.filter(el=>(el%2===0));
    return Number(sol.join(''))+Number(sol2.join(''));

}