var readline = require('readline');
var util = require('util');

var RL = readline.createInterface(process.stdin, process.stdout);

    RL.question('What is your name?', (whatever)=>{

    RL.setPrompt(`${whatever} how old are you? `);

    RL.prompt();

    RL.on('line', (age)=>{

        if(age < 18){
            util.log(`${whatever.trim()} because you are ${age} years old, you cannot proceed`);
            RL.close();
        }else {
            util.log(`${whatever.trim()} is great that you are ${age} years old, you can now enjoy our services`);
            RL.close();
            
        }


    });

});

