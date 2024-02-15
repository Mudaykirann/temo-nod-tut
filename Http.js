const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hello World!');
    } else if (req.url === '/about') {
        res.end('Hello World welcome to your about page!');
    } else {
        res.end(`
            <h1>OOPS</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href='/'>Back to Home</a>
        `);
    }
});

server.listen(5000);
