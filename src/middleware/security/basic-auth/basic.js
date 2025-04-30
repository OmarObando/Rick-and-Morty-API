const basicAuth = require('basic-auth');
const {codes} = require('../../../utils/status-code');
const {statusMessages} = require('../../../utils/status-messages');
const {credentials} = require('./credentials');

const verifyBasicAuth = (req, res, next) => {
    const auth = basicAuth(req);
    if (!auth || !auth.name || !auth.pass) {
        res.set('WWW-Authenticate', 'Basic realm="example"');
        res.status(codes.UNAUTORIZED).send(statusMessages.UNAUTORIZED);
        return;
    }
    if(!checkCredentials(auth.name, auth.pass)) {
        res.set('WWW-Authenticate', 'Basic realm="example"');
        res.status(codes.UNAUTORIZED).send(statusMessages.UNAUTORIZED);
        return;
    }
    next();
};

const checkCredentials = (user, pass) => {
    if (user === credentials.user && pass === credentials.password) {
        return true;
    }
    return false;
};

module.exports = {verifyBasicAuth};
