const   express                   = require('express'),
        mongoose                = require('mongoose'),
        passport                = require('passport'),
        bodyParser              = require('body-parser'),
        User                    = require('./models/user'),
        localStrategy           = require('passport-local'),
        passportLocalMongoose   = require('passport-local-mongoose'),
        app                     = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("express-session")({
    secret: "Learning is a great skill!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.connect('mongodb://localhost/auth_demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// Routes:
//============

app.get('/', (req, res)=>{
    res.render('home');
});

app.get('/secret', isLoggedIn, (req, res)=>{
    res.render('secret');
});


// Auth Routes:
//=============

app.get('/register',(req, res)=>{
    res.render('register');
});

app.post('/register',(req, res)=>{
    User.register(new User({username: req.body.username}), req.body.password, 
    function(err,user){
                if(err){
                    console.log(err);
                    return res.render('register');
                }
                passport.authenticate("local")(req,res,function(){
                    res.redirect('/secret');
            });

    });
});

// Login Routes:
//================

app.get('/login',(req, res)=> {
    res.render('login');
});

app.post('/login', passport.authenticate("local",{
    successRedirect: '/secret',
    failureRedirect: '/login'
}),(req, res)=>{});

app.get('/logout', (req, res)=>{
    req.logout();
    res.redirect('/');
});

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

app.listen(3000,()=>{
    console.log("App has started!");
});