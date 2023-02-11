const fs = require('fs');

// const data = fs.readFileSync('lorem.txt', { encoding: 'utf-8' });
const data = fs.readFile('lorem.txt', { encoding: 'utf-8' }, (err, data) =>
  console.log(data)
);

// console.log(data);
console.log('Program ended!!!!!!!!!!!!!!!!!!!!!!!');
