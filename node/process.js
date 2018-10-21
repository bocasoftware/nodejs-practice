process.stdout.write('Ask me a question');

process.stdin.on('data',function(answer){console.log(answer.toString())});

process.exit();