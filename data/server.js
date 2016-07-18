
var express = require('express');
var bodyParser = require('body-parser');
var app = express(); 
var PORT = process.env.PORT || 8080; 
var cors = require ('cors');
var fs = require('fs');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.post('/api/jsonmaker', function(req, res){
        
    var file = "./" +  req.body.lesson + ".json";   
    var myString = JSON.stringify(req.body, null, 4) + ",";
    
    fs.appendFile(file, myString, (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    });
});

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});