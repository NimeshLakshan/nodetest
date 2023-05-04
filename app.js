const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200);
        res.end('Hello World!');
    } else {
        res.writeHead(405);
        res.end();
    }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});