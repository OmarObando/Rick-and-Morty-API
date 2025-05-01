const jwt = require('jsonwebtoken');


// JWT module to future use in the project

require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = (user) => {
    const payload = {
        _id : user.id,
    }
    const sign = jwt.sign(
        payload,
        JWT_SECRET,
        {expiresIn: '2h'}
    );
    return sign;
};

const verifyToken = (token) => {
    try{
        return jwt.verify(token, JWT_SECRET);
    }catch (err){
        return null;
    }
}

module.exports = {
    generateToken,
    verifyToken
}