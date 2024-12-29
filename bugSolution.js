const http = require('http');

const server = http.createServer((req, res) => {
  try {
    console.log(undefined.property); // Simulating an error
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
    return; // Important to stop further execution
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});