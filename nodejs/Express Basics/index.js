var express = require('express');
var app = express();
var PORT_NUMBER = 3000;


// Handlers:
//==============================================================

function strRepetition(strToRepeat, numOfTimes){
    var returnString = '';
    
    for(var i=0;i<Number(numOfTimes);i++){
        returnString+= strToRepeat + ' ';
    }
    
    return returnString;
}

var animalsVoice = {
    pig : 'Oink', 
    cow : 'Moo',
    dog : 'Woof Woof'
}



// Routes:
//==============================================================

app.get('/', function (req, res) {
    res.send('Hi there, Welcome to my assignment!');
});

app.get('/speak/:animal', function (req, res) {
    res.send(animalsVoice[req.params.animal.toLowerCase()]);
});

app.get('/repeat/:stringToRepeat/:numberOfTimes', function (req, res) {
    
    res.send(strRepetition(req.params.stringToRepeat, req.params.numberOfTimes));
});

app.get('*', function (req, res) {
    res.send('Sorry, page not found...');
});

app.listen(PORT_NUMBER, function(){
    console.log("Server started on port " + PORT_NUMBER);
});