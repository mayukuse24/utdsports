// attempt to connect to database

'use strict';
const express =  require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app  = express();
app.set('view engine','pug');

//Parse request body
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Responses
module.exports = {
	connect: function () {
		let config = {
			user: 'root',
			database: 'utdsports',
			password: '',
			socketPath = `/cloudsql/utdsports:us-central1:instance-1`
		};
		
		let connection = mysql.createConnection(config);
		
		connection.connect(function(err, conn){
			if(err){
					console.error('Error connecting '+err.stack);
					return;
			}
			console.log('Connected as thread id: '+connection.threadId);
		});
	}
};