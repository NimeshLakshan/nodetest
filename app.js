const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    if (req.url === '/data') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hello from Node.js!');
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Not found');
        res.end();
    }
});

server.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port 5000`);
});