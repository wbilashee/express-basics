const express = require("express");
const logger = require("./logger");
const authorize = require("./authorize");
const app = express();

// req => middleware => res

app.get("/", [authorize, logger], (req, res) => {
    res.status(200).send("Home Page");
});

app.get("/about", logger, (req, res) => {
    res.status(200).send("About Page");
});

app.get("*", logger, (req, res) => {
    res.status(404).send("Error Page");
});

app.listen(5000, () => {
    console.log("Server is listening on port: 5000...");
});