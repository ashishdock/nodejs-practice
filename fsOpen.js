const fs = require('fs');

console.log('Going to open a file');
fs.open('lorem.txt', 'r+', (err, fd) => {
  if (err) {
    return console.log(err);
  }
  console.log('File opened successfully');
  fs.stat('lorem.txt', (err, stats) => {
    console.log(stats);

    console.log('isFile: ', stats.isFile());
    console.log('isDirectory: ', stats.isDirectory());
  });
});

console.log('Filename: ', __filename);
console.log('Dirname: ', __dirname);
