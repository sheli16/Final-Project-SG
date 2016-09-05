var express = require('express');
var app = express();

var passport = require('passport');

// This is the file we created in step 2.
// This will configure Passport to use Auth0
var strategy = require('./setup-passport');

// Session and cookies middlewares to keep user logged in
var cookieParser = require('cookie-parser');
var session = require('express-session');
// ____________________________________________________________________________



// set app to run at port 3000
app.listen(3000, function() {
  console.log('App running on port 3000!');
});

// -----------------------------------------------------------------------------
app.use(cookieParser());
// See express session docs for information on the options: https://github.com/expressjs/session
app.use(session({ secret: 'RPABMJyk1zXzR0lVGFc0baba0tvLJOQ8pFnlZA7zp2YsJ_MMRVdQJ8jgTdahUuCp', resave: false,  saveUninitialized: false }));
...
app.use(passport.initialize());
app.use(passport.session());
...
// Auth0 callback handler
app.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
  function(req, res) {
    if (!req.user) {
      throw new Error('user null');
    }
    res.redirect("/user");
  });



























// var express = require('express');
// var flash = require('connect-flash');
// var app = express();
// var exphbs = require('express-handlebars');
// var bodyParser = require('body-parser');
// var passport = require('passport');
// var session = require('express-session');
// var orm = require('./db/orm.js');
// var PORT = 8080;

// //Handlebars-------------------------------------------------------
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');
// //-----------------------------------------------------------------

// //Middleware-------------------------------------------------------
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.text());
// app.use(bodyParser.json({type:'application/vnd.api+json'}));

// //session is used to keep the user logged in 
// app.use(session({ 
// 	secret: 'keyboard cat', 
// 	saveUninitialized: true
// }))

// //flash is used to show a message on an incorrect login
// app.use(flash());

// //passport middleware methods
// app.use(passport.initialize());
// app.use(passport.session());

// app.use(express.static('public'));
// //-----------------------------------------------------------------


// //Routes-----------------------------------------------------------
// require('./routes/html-routes.js')(app);
// //-----------------------------------------------------------------

// orm.connectToDB();

// app.listen(PORT, function(){
// 	console.log('listening on port', PORT)
// });
