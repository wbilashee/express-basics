const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    if (req.url === "/") {
        res.statusCode = 200;
        res.end("Home Page");
    } else if (req.url === "/about") {
        res.statusCode = 200;
        res.end("About Page");
    } else {
        res.statusCode = 404;
        res.end("Error Page");
    }
});

server.listen(5000);
