var orm = require('../db/orm.js');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.argv[2],
    database: 'topNotchdb'
});

// object relational mapper (ORM)

var ormdb = {
    deleteOne: function(userId, cb) {
        var queryString = 'DELETE FROM jobs WHERE id = ' + userId; 
        console.log('query selectOne: '+ queryString);
        connection.query(queryString, function(err, res) {
            cb(res);
        });
    },

    selectAll: function(userId, cb) {
        var queryString = 'SELECT * FROM jobs WHERE userId = ' + userId; 
        console.log('query selectAll: '+ queryString);
        connection.query(queryString, function(err, res) {
            cb(res);
        });
    },
    insertOne: function(userId, jobName, jobAddress, jobMaterial, jobSink, jobEdge, jobSqft, cb) {
        console.log('userId: ' + userId);
        var queryString = 'INSERT INTO jobs(userId, jobName, jobAddress, jobMaterial, jobSink, jobEdge, jobSqft) VALUES (?,?,?,?,?,?,?)';
        
        console.log('query insert: '+ queryString);
        connection.query(queryString, [userId,jobName, jobAddress, jobMaterial, jobSink, jobEdge, jobSqft], function(err, res) { 
            cb(res);
        });
    },
    
};

module.exports = ormdb;