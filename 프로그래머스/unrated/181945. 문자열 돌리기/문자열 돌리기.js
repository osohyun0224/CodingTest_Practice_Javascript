const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = String(input[0]);
    let answer = str.split("");
    for(let i =0; i < answer.length; i++){
        console.log(answer[i] );
    }
});