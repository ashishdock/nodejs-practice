const fs = require('fs');
var data = '';

const readerStream = fs.createReadStream('lorem.txt');

readerStream.setEncoding('utf-8');

readerStream.on('data', function (chunk) {
  data += chunk;
});

readerStream.on('end', () => {
  console.log(data);
});

readerStream.on('error', (err) => {
  console.log(err);
});

readerStream.on('finish', () => {
  console.log('Finished Reading data');
});

console.log('Program Ended');

// Each type of Stream is an EventEmitter instance and throws several events at different instance of times. For example, some of the commonly used events are −

//     data − This event is fired when there is data is available to read.

//     end − This event is fired when there is no more data to read.

//     error − This event is fired when there is any error receiving or writing data.

//     finish − This event is fired when all the data has been flushed to underlying system.
