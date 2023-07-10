function solution(my_string, n) {
    var answer = '';
    //문자열을 배열로 쪼개서 어쩌고 저쩌고 하지말고 문자열을 쪼갤때는 "slice함수를 사용하자!"
    answer=my_string.slice(0,n);
    return answer;
}