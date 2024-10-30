const {join} = require("path");
const layout = require("express").Router();
const cookieparser = require("cookie-parser");

layout.get("/", cookieparser(), (req, res) => {
    res.sendFile(join(__dirname, "../../src/index.html"))
});

module.exports = layout;