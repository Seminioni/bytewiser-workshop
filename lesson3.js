/*
Write a program that takes the first buffer written to process.stdin,
updates all instances of . with ! and then logs out the updated buffer object.
*/

// ############## My solution
const buf = process.stdin;

process.stdin.pipe(require('split')()).on('data', processLine);

function processLine(line) {
  line = line.replace(/\./g, '!');
  console.log(Buffer.from(line));
}

// ############### Their solution
// const DOT = '.'.charCodeAt(0);
// const BANG = '!'.charCodeAt(0);

// process.stdin.on('data', function(buff) {
//   for (var i = 0; i < buff.length; i++) {
//     if (buff[i] === DOT) buff[i] = BANG;
//   }

//   console.log(buff.toString());
// });
