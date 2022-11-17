const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(5000, () => {
    console.log("Server is listening on port: 5000...");
});