require("dotenv").config();
const { Sequelize } = require("sequelize");

// Make sure to cast everything to string (even if they seem like strings already)
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "postgres",
    }
);

sequelize.authenticate()
    .then(() => console.log("Connected to DB"))
    

module.exports = sequelize;
