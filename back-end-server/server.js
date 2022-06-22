const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");
const Role = db.role;
// calling body-parser to handle the Request object from POST requests
const bodyParser = require('body-parser');
// good good on body-parser
// https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and re-sync DB'); 
    initial();
});

function initial() {
    Role.create({
        id: 1,
        name: "consumer"
    });
    Role.create({
        id: 2,
        name: "admin"
    });
    Role.create({
        id: 3,
        name: "developer"
    });
}

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
// recognize incoming request object as JSON object
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
// recognize incoming request as strings or arrays
app.use(express.urlencoded({ extended: true }));
// alternative way to handle incoming POST or PUT request using body parser
app.use(bodyParser.urlencoded({ extended: true}))
// simple route
app.get("/", (req, res) => {
  res.json({ message: "back end server is running now" });
});
require('./app/routes/auth.routes')(app)
require('./app/routes/user.routes')(app)
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});