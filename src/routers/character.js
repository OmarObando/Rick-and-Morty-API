const router = require('express').Router();
const {verifyBasicAuth} = require('../middleware/security/basic-auth/basic');
const {getCharacter} = require('../controllers/character-controller');
const {validateGetCharacters} = require('../validators/character');


router.get('/', verifyBasicAuth, validateGetCharacters, getCharacter);

module.exports = router;