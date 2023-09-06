const jwt = require('jsonwebtoken');
require('dotenv').config({path: ""})

const secret = "secret";
const expiration = '2h';

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }
        if (!token) {
            return req;
        }
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }
        return req;
    },
    signToken: function (user) {
        const payload = {userId: user._id, username: user.username, email: user.email };
        console.log(" test",secret)
        if(!secret) { 
            throw new Error("JWT secret key not defined")
        }
        const token =jwt.sign(payload, secret, {expiresIn: expiration})
        return token;      
    },
};