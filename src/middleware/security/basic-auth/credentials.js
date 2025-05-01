require('dotenv').config();

const USER_BASIC = process.env.BASIC_AUTH_USER || 'admin';
const PASS_BASIC = process.env.BASIC_AUTH_PASS || 'admin';

const credentials = {
    user : USER_BASIC,
    password : PASS_BASIC 
}

module.exports = {credentials};
