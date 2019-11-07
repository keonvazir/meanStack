const express = require("express");
const app = express();
const session = require('express-session')
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const flash = require('express-flash');
// const validate = require("mongoose-validator");

var bcrypt = require("bcryptjs");


app.use(bodyParser.urlencoded({entended: true}));
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(session({ cookie: { maxAge: 60000 }, 
    secret: 'woot',
    resave: false, 
    saveUninitialized: false}));
    
app.use(flash());
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

mongoose.connect('mongodb://localhost/login', {useNewUrlParser: true});

const UserSchema = new mongoose.Schema({
    email: {type: String, required: true},
    firstName: {
        type: String,
        required: true},
    lastName: {
        type: String,
        required: true},
    birthday: {
        type: String, 
        required: true,
    },
    password_hash: {
        type: String, 
        required: true,
    },
}, {timestamps: true});

const User = mongoose.model('User', UserSchema);

app.get("/", (req, res)=>{
    console.log("~Root~");
    res.render("index");
});

app.post("/login", (req, res)=>{
    console.log("~Login~", req.body);
    User.findOne({email: req.body.email})
        .then((user)=> {
            return bcrypt.compare(req.body.password_hash, user.password_hash);
        })
        .then((result)=>{
            if(result){
                res.redirect("/success")
            } else{
                req.flash("regform", "Wrong password_hash");
            }
        })
        .catch((err)=>{
            for(var key in err.errors){
                req.flash("regform", err.errors[key].message);
            }
            req.flash("regform", "Error finding user account");
            res.redirect("/");
        })
    })

app.post("/register", (req, res)=>{
    console.log("~Register~", req.body);
    var error = flase;
    if(!(req.body.email.includes('@') && req.body.email.includes('.'))){
        req.flash('regform', "Not an email!");
        error = true;
    }
    if(!(req.body.firstName.length > 1)){
        req.flash("regform", "Please add more characters to your first name");
        error = true;
    }
    if(!(req.body.lastName.length > 1)){
        req.flash("regform", "Please add more characters to your last name");
        error = true;
    }
    if(req.body.password != req.body.confpassword){
        req.flash("regform", "Passwords don't match");
        error = true;
    }
    if(!(req.body.password.length > 5)){
        req.flash("regform", "Password should have more than 5 characters");
        error = true;
    }
    var re = /[0-9]/;
    if(!re.test(req.body.password)){
        req.flash('regform', "Password should contain a digit");
        error = true;
    }
    if(error){
        res.redirect("/")
    }else{
        bcrypt.hash(req.body.password, 9)
        .then((hash) =>{
            req.body.password_hash = hash;
            delete req.body.password;
            delete req.body.confpassword;

            return User.create(req.body);
        })
        .then((user) =>{
            req.flash("regform", err.errors[key].message);
            res.redirect("/");
        })
        .catch((err)=>{
            for(var key in err.errors){
                req.flash("regform", err.errors[key].message);
            }
            res.redirect("/");
        });
    }

});

app.get("/success", (req, res)=>{
    console.log("~Success~");
    res.end("Success");
})

app.listen(8000, () => console.log("listening on port 8000"));
