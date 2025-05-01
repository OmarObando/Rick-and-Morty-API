const jwt = require('jsonwebtoken');

require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

// JWT Middleware added to use in future endpoints

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