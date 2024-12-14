const http = require('http');
const fs = require('fs');

const fileHandler = (fileName, statusCode, req, res) => {
    fs.readFile(fileName, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.writeHead(statusCode, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }
    });
};

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fileHandler("index.html", 200, req, res);
    } else if (req.url === '/about') {
        fileHandler("about.html", 200, req, res);
    } else if (req.url === '/contact') {
        fileHandler("contact.html", 200, req, res);
    } else if (req.url === '/service') {
        fileHandler("service.html", 200, req, res);
    } else if (req.url === '/login') {
        fileHandler("login.html", 200, req, res);
    } else if (req.url === '/signup') {
        fileHandler("signup.html", 200, req, res);
    } else {
        fileHandler("404.html", 404, req, res);
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://127.0.0.1:3000');
});
