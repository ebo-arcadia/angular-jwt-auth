module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Ebo$usingmysql2022",
    DB: "jwtAuth",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };