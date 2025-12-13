const jwt = require('jsonwebtoken');

const secretKey = "uvyyyvygunlknyngyybtrtrbruvrrvrvtbugbydjyfugbhniljiljmbhgvgfcesxssrdcdtdcvftfyvyrjtvfhfvfvytfvtdtdrdcdrcg"; // Replace with your actual secret key

class JwtProvider {

    constructor(secretKey){
        this.secretKey=secretKey;
    }


    createJwt(payload){
     return jwt.sign(payload, this.secretKey, {expiresIn: '24h'});

    }

    getEmailFromJwt(token){
        try {
            const decodedToken = jwt.verify(token, this.secretKey);
            return decodedToken.email;
        } catch (error) {
            throw new Error('Invalid or expired token');
        }

}

    verifyJwt(token){
        try {
           return jwt.verify(token, this.secretKey);
           
    }   catch (err) {
          throw new Error('Invalid or expired token');
       }

    }
}

module.exports = new JwtProvider(secretKey);