const http = require('http');

const server = http.createServer((req, res) => {
  // Without proper error handling, an unhandled exception here will crash the server
  console.log(undefined.property); // Simulating an error
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});