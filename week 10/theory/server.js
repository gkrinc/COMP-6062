const http = require('http'); // CommonJS module import

const hostname = '127.0.0.1';
const port = 5050;

const server = http.createServer((req, res) => {
  if (req.url === '/api') {
    if (req.method === 'POST') {
      let body = [];
      req.on('data', chunk => {
        body.push(chunk);
      }).on('end', () => {
        res.statusCode = 201;
        body = Buffer.concat(body).toString();
        res.setHeader('Content-Type', 'application/json');
        return res.end(body);
      });
    } else if (req.method === 'GET') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.write('Hello');
      res.write(' ');
      res.write('World');
      return res.end();
    }
  } else if (req.url === '/status') {
    res.statusCode(200);
    return res.end('Healthy');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
