const { codes } = require("../../../utils/status-code");
const {verifyToken} = require("./jwt");

// JWT Middleware added to use in future endpoints

const authMiddleware = (req, res, next) => {
    try{
        const auth = req.headers.authorization || null;
        if(!auth){
            res.status(codes.UNAUTORIZED).send("Access denied - Auth Required");
            return;
        }
        const token = auth.split(" ").pop();
        const dataToken = verifyToken(token);
        if(!dataToken._id){
            res.status(codes.UNAUTORIZED).send("Access denied - Invalid Token");
            return;
        }
        req._id = dataToken._id;
        next();
    }catch(err){
        res.status(codes.SERVER_ERROR).send("Error with JWT token");
    }

}

module.exports = authMiddleware;