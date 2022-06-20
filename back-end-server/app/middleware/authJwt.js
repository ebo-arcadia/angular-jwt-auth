const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');
const db = require('../models');
const User = db.user;

verifyToken = (req, res, next) => {
    let token = req.header["x-access-token"];
    if (!token) {
        return res.status(403).send({ message: "No token is provided"});
    }
    jwt.verify(token, config.secret, (error, decoded) => {
        if (error) {
            return res.status(401).send({ message: "Unauthorized"});
        }
        req.userId = decoded.id;
        next();
    });
};

isAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "admin") {
            next();
            return;
          }
        }
        res.status(403).send({
          message: "Require Admin Role!"
        });
        return;
      });
    });
  };

isConsumer = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "consumer") {
                    next();
                    return;
                }
            }
            res.status(403).send({ message: "Require consumer role!"});
            return;
        });
    });
};

isDeveloper = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "developer") {
                    next();
                    return;
                }
            }
            res.status(403).send({ message: "Require developer role!"});
            return;
        });
    });
};

const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin,
    isConsumer: isConsumer,
    isDeveloper: isDeveloper
};

module.exports = authJwt;