'use strict';

/* Your code goes here! */
var readline = require('readline');
var io = readline.createInterface({ //call the interface "io"
  input: process.stdin, //input comes from the terminal ("standard in")
  output: process.stdout //output goes to the terminal ("standard out")
});
io.question('Where do you want to go?', function(answer) {
	console.log('You said "'+answer.toUpperCase()+'"!');
	io.close(); //close the whole interface once completely done asking questions
});