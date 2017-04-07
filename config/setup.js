var User = require('./../server/models/users');
const ADMIN = 'accrefy';
const EMAIL = 'accrefy@gmail.com';

module.exports = {
    // save admin user at start
    setAdmin: function() {
        User.findOne({ 'local.username' :  ADMIN }, function(err, user) {
                // if there are any errors, return the error before anything else
                if (err)
                    console.error('Error', err);

                // if no user is found
                if (!user){
                var adminUser = new User();

                adminUser.local.username = ADMIN;
                adminUser.local.password = adminUser.generateHash('Bogoaccrefied7');
                adminUser.local.email = EMAIL;
                adminUser.local.admin    = true;

                adminUser.save(function(err) {
                            if (err)
                                throw err;

                            // if successful, return the new user
                            return;
                        });
                }
            return;
        });
    }
}