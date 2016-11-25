const passport = require('passport');

module.exports = function(config) {
    const localLogInStrategy = require('./research.local-login.js')(config);
    const localSignUpStrategy = require('./research.local-signup.js')(config);
    passport.use('local-login', localLogInStrategy);
    passport.use('local-signup', localSignUpStrategy);
};
