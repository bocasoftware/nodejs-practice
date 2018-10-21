const execute = require('child_process').exec;

execute(/*if windows use dir, ls command is for mac  */"ls", (err, stdout)=>{

    if (err){
        return err;
    }

    console.log(stdout);

});