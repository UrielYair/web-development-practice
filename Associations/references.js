const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/blog_demo_2', {
        useNewUrlParser: true, 
        useUnifiedTopology: true
});

const Post = require("./models/post");
const User = require("./models/user");

// User.create({
//     email: "bob@xyz.com",
//     name: "Bob Doe"
// });

// Post.create({
//     title: "Hi!",
//     content: "Bye!"
// },(err,post)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         User.findOne({email:"bob@xyz.com"},(err, foundUser)=>{
//             foundUser.posts.push(post);
//             foundUser.save((err,date)=>{
//                 console.log(date);
//             });
//         });
//     }
// });

User.findOne({email:"bob@xyz.com"}).populate("posts").exec((err,user)=>{
    if (err){
        console.log(err);
    }
    else{
        console.log(user);
    }
});