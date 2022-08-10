// require('dotenv').config();
// const {DATABASE_URL} = process.env
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "postgres://vmeozotnuzfrbv:cc26f1167e8eb7a10f448676b92fd8bedeb4cd9479f3aab083810ed5a6f08acc@ec2-34-193-44-192.compute-1.amazonaws.com:5432/df0imtkaokc0gg",
    
  {
    dialect: "postgress",
    dialectOptions: {
      ssl: {
      rejectUnauthorized: false,
      }
    },
  }
);
module.exports = sequelize;
