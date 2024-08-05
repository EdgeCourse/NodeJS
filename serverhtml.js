const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<!DOCTYPE html>');
  res.write('<html lang="en">');
  res.write('<head><title>My Page</title></head>');
  res.write('<body><h1>Hello from Node.js!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
