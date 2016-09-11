var UserModel = require('../models/User.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var orm = require('../db/orm.js');
var ormdb = require('../db/ormdb.js');
var localStorage = require('json-localstorage');

var localStorageKey = 'drawing'
var getStorage = localStorage.getItem(localStorageKey)
	
$('#saveTempMSQL').on('click', function(){	
   function getTempStorage(){
   		if (getStorage = localStorageKey)
		JSON.parse(getStorage);
		console.log(getStorage);
   }
 });