const express = require("express");
const app = express();
const userRouter = require("./routes/user");

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/users", userRouter);

app.listen(5000, () => {
    console.log("Server is listening on port: 5000...");
});