const session = require("express-session");
const dotenv = require("dotenv");

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET;

module.exports = session ({
    secret: SECRET_KEY.toString('utf8'),
    resave: false,
    saveUninitialized: false,
    cookie: { secure : false, maxAge : 18000000 } 
});