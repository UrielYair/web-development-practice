const   PORT            = process.env.PORT || 3000,
        express         = require("express"), 
        app             = express(),
        bodyParser      = require("body-parser"),
        mongoose        = require("mongoose"),
        methodOverride  = require("method-override"),
        expressSanitizer= require("express-sanitizer");

// app config

process.env.DATEBASEURL = process.env.DATEBASEURL || "mongodb://localhost/restful_blog_app";
mongoose.connect(process.env.DATEBASEURL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));

// mongoose/model config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now} 
});
var Blog = mongoose.model("Blog", blogSchema);

//RESTful routes

// Landing Page
app.get("/",(req, res)=>{
    res.redirect("/blogs");
});

//Show Blogs
app.get("/blogs", (req, res)=>{
    Blog.find({}, (err,blogs)=>{
        if (err){
            console.log("Error!!");
        }
        else{
            res.render("index", {blogs: blogs});
        }
    })
});

// Add New blog
app.get("/blogs/new",(req, res)=>{
    res.render("new");
});

//Create Route
app.post("/blogs", (req, res)=>{
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, (err, blog)=> {
        if (err){
            console.log("ERROR while creating new post.");
            console.log(err);
            res.render("new");
        }
        else{
            res.redirect("/blogs");
        }
    });
});

// Show page
app.get("/blogs/:id",(req, res)=>{
    Blog.findById(req.params.id, (err, foundBlog)=>{
        if (err){
            res.redirect("/blogs/");
        }
        else{
            res.render("show", {blog: foundBlog});
        }
    });
});

// Edit Route
app.get("/blogs/:id/edit",(req, res)=>{
    
    Blog.findById(req.params.id,(err,foundBlog)=>{
        if (err){
            res.redirect("/blogs/");
        }
        else{
            res.render("edit", {blog: foundBlog});
        }
    });
    
});

// Update Route
app.put("/blogs/:id", (req, res)=>{
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog)=>{
        if (err){
            res.redirect("/blogs");
        }
        else{
            res.redirect("/blogs/"+req.params.id);
        }
    })
})

app.delete("/blogs/:id", (req, res) =>{
    Blog.findByIdAndRemove(req.params.id,err=>{
        if (err){
            res.redirect("/blogs/");
        }
        else{
            res.redirect("/blogs/");
        }
    })
});

app.listen(PORT,()=>{
    console.log("Blog App is running...");
});
