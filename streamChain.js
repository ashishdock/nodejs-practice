const fs = require('fs');

const zlib = require('zlib');

fs.createReadStream('lorem.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('lorem.txt.gz'));

console.log('File compressed');
