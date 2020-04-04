var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs"); // will make specifying .ejs suffix in the render function be redundend.



app.get("/",function(req, res){
    console.log('GET /');
    res.render("home");
})

app.get("/message/:message",function(req, res){
    console.log('GET /message');
    res.render("message", {name: req.params.message.toUpperCase()});
})

app.get("/posts",function(req, res){
    console.log('GET /posts');
    var posts = [
        {title: "Post 1",author: "Author 1"},
        {title: "Post 2",author: "Author 2"},
        {title: "Post 3",author: "Author 3"}
    ]
    res.render("posts", {posts: posts});
})


app.listen(3000, function(){
    console.log("Server is up and running - port 3000");
})