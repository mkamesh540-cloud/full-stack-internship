const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Kamesh");
});

app.post("/signin", (req, res) => {

    console.log(req.body);

    res.json({
        success: true,
        message: "Sign In Successful"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});