const {matchedData} = require('express-validator');
const {getCharacters} = require('../services/character-service')
const {replaceSpaces, formatCharacters, getAliveCharacters} = require('./helpers/character-helper');
const {codes} = require('../utils/status-code');
const {statusMessages} = require('../utils/status-messages');

//To manage the data of the service, we are going to use helpersclasses
//We going to use the helpers folder to manage the data, this is a good practice to separate the data from the logic
//We can mantain the code more easily and we can use the helpers in other parts of the code
//In anoter scenario, we culd add helpers to manage the data directly from the service, but in this case we are going to use the helpers to manage the data from the controller

const getCharacter = async (req, res) => {
    const {page} = matchedData(req);
    try{
        const rawCharacters = await getCharacters(page);
        const aliveCharaters = getAliveCharacters(rawCharacters);
        const formattedCharacters = formatCharacters(aliveCharaters);
        const characters = replaceSpaces(formattedCharacters);
        res.send({message: statusMessages.OK, characters});
    }catch(err){
        res.status(codes.SERVER_ERROR);
        res.send({error: err.message});
    }
};

module.exports = {getCharacter};