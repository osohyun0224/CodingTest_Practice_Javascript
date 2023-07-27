function solution(letter) {
    var answer = '';
    //javascript 객체 사용
    var morse = {
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    };
    var morseLetters = letter.split(' ');
    for(var i=0; i<morseLetters.length; i++){
        answer += morse[morseLetters[i]];
    }
    return answer;
}
