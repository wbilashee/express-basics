const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("../public"));

app.get("/", (req, res) => {
    res.status(200).send(path.resolve(__dirname, "../public/index.html"));
});

app.get("*", (req, res) => {
    res.status(404).send("Error Page");
});

app.listen(5000, () => {
    console.log("Server is listening on port: 5000...");
});