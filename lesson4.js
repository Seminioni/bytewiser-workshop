/* 
The argument given to you from process.argv[2] will be a path to a file.

Read this file and split it by newline characters ('\n'). You should log
one Buffer per line.

*/

const filepath = process.argv[2];
const fs = require('fs');

const file = fs.readFileSync(filepath);


