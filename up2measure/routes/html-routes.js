var UserModel = require('../models/User.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var orm = require('../db/orm.js');
var ormdb = require('../db/ormdb.js');
var React = require('react');
var ReactDOM = require('react-dom');
var bodyParser = require('body-parser');
var localStorage = require('json-localstorage');
var ls = require('local-storage');
var mysql = require('mysql');

// var LiterCanvas = require('../public/literallycanvas.js');
// var LC = require('literallycanvas');
// var LiterallyCanCore = require('../js/literallycanvas-core.js');
// ReactDOM.render(<App/>, ...); 

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
// --------------------------Authentication routes
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

// ----------------------------basic routes
	app.get('/', function(req, res){
		res.render('/index', {
			
		});
	});

	app.get('/index', function(req, res){
		res.redirect('/');
	});

	app.get('/dash', function(req, res){
		if (req.isAuthenticated()) {
			console.log(req.user.userId);
			res.redirect('/dash.html', {
				
			});
		}
		else {
			res.redirect('/verify');
			}
	});
	
	app.get('/retrieveTemplate', function(req, res){
		if (req.isAuthenticated()) {
			console.log(req.user.userId);
			console.log("-----------------customer number:---------------------")
			var customerNumber = 107;
			console.log(customerNumber)
		ormdb.retrieveTempJSON(req.user.userId, customerNumber, function(err, data){			    
			console.log("----------------- image:data - HtmlRoutes---------------------")
			console.log(data);
			res.send(data);
		  });
		}
		else {
			res.redirect('/verify');
			}
		});
// -----------------------------ORM MYsql Routes---------------------------
	app.get('/dash', function(req, res){
		if (req.isAuthenticated()) {
			
			ormdb.selectAll(req.user.userId, function(result){
		            res.render('dash.html', {
		            	// jobs1: result
		            });
			});
			
		}
		else {
			
			res.redirect('/verify');
		}
	});

	
	app.post('/create', function (req, res) {
		   if (req.isAuthenticated()) {
			console.log(req.user.userId)
			console.log(req.body.CustName)
			var imageDefault = "default image"
		ormdb.insertCust(req.user.userId, req.body.CustNumb, req.body.CustName, req.body.CustAdd, req.body.CustMat,req.body.SinkDet, req.body.EdgeDet, req.body.SQFT, imageDefault, function(result){			    
				
		// 		 ormdb.insertCust(req.user.userId, 105, "Jimmy Jam", "2300 Jackson st, LA California", "3cm Quartz", "60/40", "round over", 150, function(result){	
		res.redirect('/dash.html')
		// alert("You have input your customer" + req.body.CustName); 
		     }); 
		} 
		 else {
		 	// alert("Oh no, There has been an error!");
		 	res.redirect('/verify')

		 }
	
	}); // end  app.post (create)

	app.post('/saveimage', function (req, res) {
		   if (req.isAuthenticated()) {
		   	// var customerNumber = 109;
		   	console.log(req.user.userId)
			console.log("##############posted to Route#################")
		   	console.log("-----------------req.body.snapshot:---------------------")
		    console.log(req.body.snapshot)
		   	console.log("-----------------req.body.snapshot:---------------------")
		   	console.log(req.body.jobNo)
		   		var customerTemp = req.body.snapshot;
				var customerNumber = req.body.jobNo;

		// ormdb.insertCust(req.user.userId, req.body, function(result){			    
		ormdb.updateCustTemplate(req.user.userId, customerNumber, customerTemp, function(result){		
					res.redirect('/dash.html')
	 		}); 
			} 
	 		else {
					res.redirect('/verify')
			}
		});
	// }


app.get('/retrieveCustomers', function(req, res){
		if (req.isAuthenticated()) {
			console.log("-----------------UserID:---------------------")
			console.log(req.user.userId);
		ormdb.retrieveCustomers(req.user.userId, function(err, data){			    
			console.log("----------------- retreive customer route - HtmlRoutes---------------------")
			console.log(data);
			res.send(data);
		  });
		}
		else {
			res.redirect('/verify');
			}
		});

app.get('/findCustomer', function(req, res){
		if (req.isAuthenticated()) {
			console.log("-----------------UserID:---------------------")
			console.log(req.user.userId);
			console.log(req.user.customerNumber);

		ormdb.findCustomer(req.user.userId, function(err, data){			    
			console.log("----------------- find customer route - HtmlRoutes---------------------")
			console.log(data);
			res.send(data);
		  });
		}
		else {
			res.redirect('/verify');
			}
		});
};

