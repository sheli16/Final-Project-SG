var logSignInfo = require('/verify');
var page4 = require('page4');
var page2 = require('page2');
window.onload();

$('#gotoReports').on('click', function(){
	 myFunction();
})

function myFunction() {
    var myWindow = window.open("/page5","", );

}

// function myFunction2() {
//     var myWindow2 = window.close()
// }
// -----code pulled from uer.js file from the passport example from ari-------------------------------------------------------------------------

function User (userObj) {
	logSignInfo.providerdata.uid = userObj.username
	console.log(providerdata)
	// this.username = userObj.username
	// this.password = userObj.password
}

module.exports = User

module.exports.saveUser = function(userObj, callback){
	logSignInfo.addUserToDB(userObj, function(status, err){
		if (err) return callback(false);
		callback(true);
	});
}
// -----code pulled from orm.js file from passport example from ari------------------------------------------------------------------------------------------
// not yet adjusted
var mysql = require('mysql');


