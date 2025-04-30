const {validationResult} = require('express-validator');
const {codes} = require('../utils/status-code');

const validateResults = (req, res, next) => {
    try{
        validationResult(req).throw();
        return next()
    }catch(err){
        res.status(codes.FORBIDDEN);
        res.send({errors: err.array()});
    }
};

module.exports = validateResults