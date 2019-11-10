// attempt to connect to database

'use strict';
const mysql = require('mysql');

//Responses
module.exports = {
	conn: undefined,
	connect: function () {
		let config = {
			user: 'root',
			database: 'utdsports',
			password: '',
			socketPath = `/cloudsql/utdsports:us-central1:instance-`
		};
		
		let connection = mysql.createConnection(config);
		
		connection.connect(function(err, conn){
			if(err){
					console.error('Error connecting '+err.stack);
					return;
			}

			console.log('Connected as thread id: '+connection.threadId);

			this.conn = connection;
		});
	}
};