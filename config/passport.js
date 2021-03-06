const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('User');
const keys = require('./keys');
// const dotenv = require('dotenv').config();

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;
// options.secretOrKey = process.env.SECRET_OR_KEY

module.exports = passport => {
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
        User.findById(jwt_payload.id)
            .then(user => {
                if(user) {
                    return done(null, user)
                }
                return done(null, false)
            })
            .catch(err => console.log(err))
    }))
}