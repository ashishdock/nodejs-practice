const fs = require('fs');

var data =
  'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ';

const writerStream = fs.createWriteStream('output.txt');

writerStream.write(data, 'utf-8');

writerStream.end();

writerStream.on('finish', () => {
  console.log('Write completed');
});

writerStream.on('error', (err) => {
  console.log(err);
});

console.log('Program ended');
