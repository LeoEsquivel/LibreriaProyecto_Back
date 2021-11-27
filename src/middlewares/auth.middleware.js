const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

module.exports = function(request, response, next){
    const token = request.headers['authorization'];
    if(!token){
        const error = new Error();
        error.message = "El Token debe ser enviado";
        error.status = 400;
        throw error;
    }

    jwt.verify(token, JWT_SECRET, function(err, decodedToken){
        if(err){
            const error = new Error();
            error.message = "Token invalido";
            error.status = 401;
            throw error;
        }

        request.user = decodedToken.user;
        next();
    });
};