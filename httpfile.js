const http = require('http');

http
  .createServer((req, res) => {
    // send the HTTP header
    // HTTP Status 200: OK
    // Content Type: text/plain
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body as "Hello World"
    res.end('Hello World!\n');
  })
  .listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
