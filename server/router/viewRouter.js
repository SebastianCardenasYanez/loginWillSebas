const version = require("express").Router();
const layout = require("../view/indexView")

version.use(layout)

module.exports = version