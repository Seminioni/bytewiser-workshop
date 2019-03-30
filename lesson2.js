/* 
    Given an unknown number of bytes passed via process.argv, create a
     buffer from them and output a hexadecimal encoded representation of the buffer.
*/

const args = process.argv.splice(2)

console.log(Buffer.from(args).toString('hex'))
