const passport = require('passport');

module.exports = function(config) {
    const localLogInStrategy = require('./research.local-login.js');
    const localSignUpStrategy = require('./research.local-signup.js');
    passport.use('local-login', localLogInStrategy);
    passport.use('local-signup', localSignUpStrategy);
};
