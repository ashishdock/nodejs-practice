const fs = require('fs');

const readerStream = fs.createReadStream('lorem.txt');

const writerStream = fs.createWriteStream('pipeWriter.txt');

readerStream.pipe(writerStream);

console.log('Program ended');
