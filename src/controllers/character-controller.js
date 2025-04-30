const {matchedData} = require('express-validator');
const {getCharacters} = require('../services/character-service')

const getCharacter = async (req, res) => {
    res.send({message: 'Hello from character controller'});
};

module.exports = {getCharacter};