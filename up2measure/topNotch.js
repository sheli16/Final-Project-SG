var UserModel = require('../models/User.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var orm = require('../db/orm.js');
var ormdb = require('../db/ormdb.js');

//Setting the strategy for Passport
passport.use(new LocalStrategy({passReqToCallback : true},
  function(req, username, password, done) {

  	//Searching the ORM for the user in the database
  	orm.findUser(username, function(err, user){
  		user = user[0];
  		if (err) { return done(err); }
      if (!user) { return done(null, false); }

      //comparing user passwords - return if not a match
      if (password !== user.password) { return done(null, false);}

      return done(null, user);
  	});
  }
));

//These two methods are required to keep the user logged in via the session
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = function(app){

	//GETs

	app.get('/verify', function(req, res){
		res.render('verify', {
			welcomeText: "Sign In",
			actionBtn: 'signin',
			message: req.flash('error')[0],
			otherAction: "Signup"
		});
	});

	app.get('/signin', function(req, res){
		res.redirect('/')
	});

	app.get('/signup', function(req, res){
		res.render('verify', {
			welcomeText: "Sign Up",
			actionBtn: 'signup',
			otherAction: "Signin"
		});
	});


	app.get('/', function(req, res){
		res.render('index', {
			
		});
	});

	app.get('/index', function(req, res){
		res.redirect('/');
	});

	app.get('/dash', function(req, res){
		if (req.isAuthenticated()) {
			
			ormdb.selectAll(req.user.userId, function(result){
		            res.render('dash', {
		            	jobs1: result
		            });
			});
			
		}
		else {
			
			res.redirect('/verify');
		}
	});
// come back to this function sure how and why?---------------------------------------------------------------
	app.post('/newCustomer', function (req, res) {
		   if (req.isAuthenticated()) {
			console.log(req.body.descInput)
			ormdb.insertOne(req.user.userId, req.body._______, req.body._________, req.body._________, req.body.wholeSaleInput,req.body.retailPriceInput, req.body.inStockInput, req.body.mRPInput, function(result){			    
					res.redirect('/dash'); 
		    }); 
		} else {
			res.redirect('/verify')
		}
		   
			

	}); // end  app.post (create)

	app.post('/delete/:id', function (req, res) {
			   if (req.isAuthenticated()) {
				
				ormdb.deleteOne(req.params.id, function(result){			    
						res.redirect('/dash'); 
			    }); 
			} else {
				res.redirect('/verify')
			}
			   	

	}); 
	

	app.get('/authenticated', function(req,res){
		if (req.isAuthenticated()) {
			res.render('authenticated', {
				username: req.user.username
			})
		} else {
			res.redirect('/verify')
		}
	});

	app.get('/logout', function(req, res){
	  req.logout();
	  res.redirect('/');
	});

	//POSTs

	app.post('/signin', passport.authenticate('local',{failureRedirect:'/verify', failureFlash:'Wrong Username or Password'}), function(req, res){
		res.redirect('/authenticated');
	});

	app.post('/signup', function(req, res){
		var user = new UserModel(req.body);
		UserModel.saveUser(user, function(status){
			if(!status) {
				res.redirect('/signup')
				return false
			}
			res.redirect('/verify');
		});
	});

};