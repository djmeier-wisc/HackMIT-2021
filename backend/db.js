/* 
 * The 'database'... also known as a JSON-backed mememory store.
 *
 * See https://github.com/expressjs/express/blob/master/examples/auth/index.js
 */
const fs = require('fs');
var hash = require('pbkdf2-password')();

let userauth_data = null;
const USERAUTH_BACKINGSTORE = "auth.json";

let userauth = function(user, pw, fn){
    console.log(`userauth: ${user} ${pw}`);
    if (!userauth_data) {
        userauth_data = JSON.parse(fs.readFileSync(USERAUTH_BACKINGSTORE, {encoding: 'utf8'}));
    }
    var user_entry = userauth_data[user];
    if (!user_entry) return fn(new Error("User not found"));

    hash({password: pw, salt: user_entry.salt}, function (err, pass, salt, hash) {
        if (err) return err_fn(err);
        if (hash === user_entry.hash) return fn(null, user);
        fn(new Error("Bad password"));
    });
}

let useradd = function(user, pw, fn) {
    if (!userauth_data) {
        userauth_data = JSON.parse(fs.readFileSync(USERAUTH_BACKINGSTORE, {encoding: 'utf8'}));
    }
    if (userauth_data[user]) return fn(new Error("User already exists"));
    hash({password: pw}, function (err, pass, salt, hash) {
        if (err) throw err;
        userauth_data[user] = {
            username : user,
            hash : hash,
            salt: salt
        };
        // Write back to backing store
        fs.writeFileSync(USERAUTH_BACKINGSTORE, JSON.stringify(userauth_data), (err, result) => {
            if (err) return fn(err);
        });
    });
}

exports.useradd = useradd;
exports.userauth = userauth;
