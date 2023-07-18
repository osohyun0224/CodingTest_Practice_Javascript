function solution(myString, pat) {
    var answer = 0;
    myString = myString.split('A').join('temp');
    myString = myString.split('B').join('A');
    myString = myString.split('temp').join('B');
    
    return Number(myString.includes(pat));
}