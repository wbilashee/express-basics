const http = require("http");
const { readFileSync } = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(readFileSync("../public/index.html"));
    }
    if (req.url === "/images/favicon.png") {
        res.writeHead(200, { "Content-Type": "image/png" });
        res.end(readFileSync("../public/images/favicon.png"));
    }
    if (req.url === "/images/flower.jpg") {
        res.writeHead(200, { "Content-Type": "image/jpg" });
        res.end(readFileSync("../public/images/flower.jpg"));
    }
    if (req.url === "/styles.css") {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(readFileSync("../public/styles.css"));
    }
    if (req.url === "/index.js") {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        res.end(readFileSync("../public/index.js"));
    }
});

server.listen(5000);