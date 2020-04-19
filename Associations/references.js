const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/blog_demo_2', {
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
    posts: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
        }
    ] 
});
const User = mongoose.model('User', userSchema);

// User.create({
//     email: "bob@xyz.com",
//     name: "Bob Doe"
// });

// Post.create({
//     title: "How to cook the best burger? Pt. 2",
//     content: "XYZ"
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