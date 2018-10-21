const emitter = require('./modules/Sendemail');




emitter.on('emailEvent', (message)=>{ 

    console.log(`Message: ${message}`);

});



emitter.emit('emailEvent', 'Send activation after user registration');