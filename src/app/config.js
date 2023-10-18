const dotenv = require('dotenv');
dotenv.config({path: '.src/.env'});
const Token = process.env.SONAR_TOKEN;
const Password = process.env.SONAR_PASSWORD;
module.exports = {Token, Password};
