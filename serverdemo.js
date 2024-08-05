const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Home Page\n');

    setTimeout(() => {
      res.write('This is a delayed response after 2 seconds.\n');
      res.end();
    }, 2000); // 2-second delay
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('About Page\n');
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
  
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
