const   PORT        = 5000,
        express     = require("express"), 
        app         = express(),
        bodyParser  = require("body-parser"),
        mongoose    = require("mongoose");

// app config
mongoose.connect("mongodb://localhost/restful_blog_app", { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

// mongoose/model config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now} 
});
var Blog = mongoose.model("Blog", blogSchema);

//RESTful routes
app.get("/",(req, res)=>{
    res.redirect("/blogs");
});

app.get("/blogs",(req, res)=>{
    Blog.find({}, (err,blogs)=>{
        if (err){
            console.log("Error!!");
        }
        else{
            res.render("index", {blogs: blogs});
        }
    })
});

app.listen(PORT,()=>{
    console.log("Blog App is running...");
});