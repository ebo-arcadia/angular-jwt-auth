const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");
const Role = db.role;
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
        id: 1,
        name: "admin"
    });
    Role.create({
        id: 1,
        name: "developer"
    });
}

var corsOptions = {
  origin: "http://localhost:8040"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "back end server is running now" });
});
// set port, listen for requests
const PORT = process.env.PORT || 8040;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});