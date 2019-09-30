
const dbConnection = require('./dbConnection');
const express =  require('express');
const app = express()


app.get('/suma/:v1/:v2', function(req, res) {
	var number1 = parseInt(req.params.v1);
	var number2 = parseInt(req.params.v2);
	var sum  = number1 + number2;
	var records = [
		[number1, number2, sum]
	  ];
	const connection = dbConnection();
	connection.query('INSERT into SUMA (sumando01,sumando02,resultado) values ?',[records], (errs,results) => {	
		if(results != ""){
			connection.query('SELECT resultado FROM SUMA', (err,result) => {	
				res.send(JSON.stringify(result));
				
			})	 
		}else{
			res.send(JSON.stringify(errs));
		}
		
	})	 
});

app.listen(3000, () => {
	console.log('My REST API running on port 3000!');
});


