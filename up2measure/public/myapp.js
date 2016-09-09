var ormdb = require('/ormdb.js');
var index = require('/index.html');
var dash = require('/dash.html');
var mysql = require('mysql');

window.onload();

$("#save-image").click(function() {
          // var drawing = document.getElementById('literally');
        var custTemp =JSON.stringify(lc.getSnapshot());
        console.log(custTemp)

        insertTempJSON: function(userId, jobImage) {
        console.log('userId: ' + userId);
        console.log(custTemp + "IS YOUR CUSTOMER TEMPLATE")
        var queryString = 'INSERT INTO jobs(userId, jobImage) Where (?,?)';
        
        console.log('query insert: '+ queryString);
        connection.query(queryString, [userId, custTemp], function(err, res) { 
            //res.redirect('/verify');
            // (res);
             // cb(res);
            // return res;
           });
      });
 });


