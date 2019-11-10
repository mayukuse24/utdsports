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

let config = {
	user:process.env.root,
	database:process.env.utdsports,
	password:process.env.NBKpyMaG9e2wJuLC


}


if(process.env.CONNECTION_NAME){
	config.socketPath = ``;
}

let connection = mysql.createConnection(config);


        connection.connect(function(err){

        if(err){
                console.error('Error connecting '+err.stack);
                return;
        }
        console.log('Connected as thread id: '+connection.threadId);

});

/* Local checking
let connection = mysql.createConnectin({

	host:,
	user:'root'
	database:'utdsports',
	password:''



});
	connection.connect(function(err){

	if(err){
		console.error('Error connecting '+err.stack);
		return;
	}
	console.log('Connected as thread id: '+connection.threadId);

});

module.exports = connection;
*/
