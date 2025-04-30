const {query} = require('express-validator')
const validateResults = require('./handleValidator')   

const validateGetCharacters = [
    query('page').optional().isInt({min: 1, max: 43}).withMessage('Page must be an integer between 1 and 43'),
    (req, res, next) => validateResults(req, res, next)
]

module.exports = {validateGetCharacters}