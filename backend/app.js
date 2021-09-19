const express = require('express');
const fs = require('fs');
const path = require('path');
var session = require('express-session');
var db = require('./db');

const port = 3037;

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('static', express.static(path.join(__dirname, 'static')));
app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'shhhh, very secret'
}));
app.use(express.urlencoded());

// Message generation
app.use(function(req, res, next){
  var err = req.session.error;
  var msg = req.session.success;
  delete req.session.error;
  delete req.session.success;
  res.locals.message = '';
  if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
  if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
  next();
});

/* Authentication api */

app.post('/register', (req, res) => {
    let error = false;
    db.useradd(req.body.username, req.body.password, (err) => {
        if (err) {
          res.json({
            error: "User already exists"
          });
          error = true;
        }
    });
    if (error)
      return;

    // Create a session for the new user
    req.session.regenerate(function() {
        req.session.user = req.body.username;
        res.json({
          user : req.body.username 
        });
    });
});

app.post('/login', (req, res) => {
    db.userauth(req.body.username, req.body.password, (err, user) => {
        if (user) {
            req.session.regenerate(function() {
                req.session.user = user;
                res.json({
                  user : user 
                });
            });
        } else {
            res.status(404);
            res.json({
              error: "Authentication failed, check your username and password"
            });
            //res.redirect('/login');
        }
    });
});

app.get('/amiloggedin', (req, res) => {
    res.json({
      loggedin : Boolean(req.session.user),
      user: req.session.user
    });
});

app.get('/logout', (req, res) => {
    req.session.destroy(function() {
        res.redirect('/');
    });
});

function restrict(req, res, next) {
    if (req.session.user) {
        next();   
    } else {
        req.session.error = "Access denied";
        res.redirect('/login');
    }
}

/* Financing data api */
app.post('/finance_data', async (req, res) => {
  // Generate the finance data from given data, sent through python script.
  let args = ``; //TODO: write this when the script exists 
  await exec(`/usr/bin/env python3 script.py ${args}`, (err, stdout, stderr) => {
    if (err) {
      res.status(500)
      res.json({
        error: "Unable to compute finance data. Try again later.",
      });
    } else {
      res.status(200);
      let options = {
        root: path.join(__dirname, 'static'),
        'Content-Type' : 'application/json'
      };
      res.sendFile('output.json', options);
    }
  });
});

/* Scholarship data endpoint */
// Sorting -- that's the fronend's problem

app.get('/scholarship_data', (req, res) => {
  let options = {
    root: path.join(__dirname, 'static'),
    'Content-Type' : 'application/json'
  };
  res.sendFile('sch_data.json', options);
});

/* Page definitions */

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'static')});
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.get('/financing', restrict, (req, res) => {
    res.sendFile('financing.html', {root: path.join(__dirname, 'static')});
})

//

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
