const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/blog_demo', {
        useNewUrlParser: true, 
        useUnifiedTopology: true
});

// Post - title, content
const postSchema =  new mongoose.Schema({ 
    title: String,
    content: String 
});
const Post = mongoose.model('Post', postSchema);

// User - email, name
const userSchema =  new mongoose.Schema({ 
    email: String,
    name: String,
    posts: [postSchema] 
});
const User = mongoose.model('User', userSchema);



// var newUser = new User({
//     email: "Ross.Geller@friends.com", 
//     name: "Ross Geller"
// });

var newUser = new User({
    email: "Joey.Tribbiani@friends.com", 
    name: "Joseph Francis (Joey) Tribbiani Junior"
});

newUser.posts.push({
    title: "Food!",
    content: "Joey doesn't share food!!!!"
});

newUser.save((err, user)=>{
    if (err){
        console.log(err);
    }
    else{
        console.log(user);
    }
});

// newUser.save(newUser, (err, user)=> {
//     if (err){
//         console.log(error);
//     }
//     else{
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Friends will have a new season",
//     content: "Friends new season will be aired on 2025!!"
// });

// newPost.save((err, post)=>{
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(post);
//     }
// });
