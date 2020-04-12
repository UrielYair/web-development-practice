var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app", { useNewUrlParser: true, useUnifiedTopology: true});

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String
});

var Cat = mongoose.model("Cat", catSchema);

var hatulCat = new Cat({
    name: "kitty",
    age: 7,
    breed: "Persian"
});

hatulCat.save(function(err, cat){
    if (err){
    console.log("Something went wrong!");
    } 
    else {
        console.log("A cat was saves to the database.");
        console.log(cat);
    }
});

Cat.create({
    name: "lastCatToCreate",
    age: 2
}, function(err, cat){
    if (err){
        console.log(err);
    }
    else{
        console.log('from create method.');
        console.log(cat);
    }
});

Cat.find({}, function(err, cats){
    if (err){
        console.log(err);
    }
    else{
        console.log(cats);
    }
});