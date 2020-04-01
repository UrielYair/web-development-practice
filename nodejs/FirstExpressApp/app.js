var express = require('express');
var app = express();

// '/' => 'Hello World!'
app.get("/", function(req, res){
    console.log("GET \ Port: 3000");
    res.send('Hello World!');
}) 

// '/bye' => "Goodbye"
app.get('/bye',function(req, res){
    console.log("GET \ bye Port: 3000");
    res.send('Goodbye');
})

// undefined routes
app.get('*',function(req, res){
    console.log("GET \* bye Port: 3000");
    res.send('Route not found.');
})

app.listen(3000, function(){
    console.log("Server has started on Port: 3000");
});
