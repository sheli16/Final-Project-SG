var UserModel = require('../models/User.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var orm = require('../db/orm.js');
var ormdb = require('../db/ormdb.js');
var React = require('react');
var ReactDOM = require('react-dom');
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
		res.render('index', {
			
		});
	});

	app.get('/index', function(req, res){
		res.redirect('/');
	});

	app.get('/dash', function(req, res){
		if (req.isAuthenticated()) {
			console.log(req.user.userId);
			res.render('dash', {
				
			});
		}
		else {
			res.redirect('/verify');
			}
	});
	
	app.get('/templateDrawing', function(req, res){
		if (req.isAuthenticated()) {
			console.log(req.user.userId);
		ormdb.insertTempJSON(req.user.userId, req.body.custTemp, function(result){			    

			res.render('dash.html', {
				
			});
		  });
		}
		else {
			res.redirect('/verify');
			}
		
	});
// -----------------------------ORM MYsql Routes---------------------------
	// app.get('/dash', function(req, res){
	// 	if (req.isAuthenticated()) {
			
	// 		ormdb.selectAll(req.user.userId, function(result){
	// 	            res.render('dash.html', {
	// 	            	// jobs1: result
	// 	            });
	// 		});
			
	// 	}
	// 	else {
			
	// 		res.redirect('/verify');
	// 	}
	// });

	
	app.post('/create', function (req, res) {
		   if (req.isAuthenticated()) {
			console.log(req.user.userId)

			// console.log(req.body.CustName)
			ormdb.insertCust(req.user.userId, req.body.CustNumb, req.body.CustName, req.body.CustAdd, req.body.CustMat,req.body.SinkDet, req.body.EdgeDet, req.body.SQFT, function(result){			    
					res.redirect('/dash.html'); 
		    }); 
		} 
		 else {
		 	res.redirect('/verify')
		 }
	
	}); // end  app.post (create)


	// app.post('/delete/:id', function (req, res) {
	// 		   if (req.isAuthenticated()) {
				
	// 			ormdb.deleteCust(req.params.id, function(result){			    
	// 					res.redirect('/dash.html'); 
	// 		    }); 
	// 		} else {
	// 			res.redirect('/verify')
	// 		}
			   	

	// });

	// app.post('/update/:id', function (req, res) {
	// 	    //connection.query('UPDATE burgers SET devoured = ? WHERE id = ?', [true, req.params.id]);            
 //           orm.updateOne('inventory', 'devoured', req.params.id,  function(result){
 //            console.log('not ready for this function yet')	
 //           	res.redirect('/dash');
 // 			});
 //    });// end  app.post (update) 
	

	
};