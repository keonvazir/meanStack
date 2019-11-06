const express = require("express");
const app = express();
const session = require('express-session')
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const flash = require('express-flash');
const validate = require("mongoose-validator");
const bcrypt = require("bcrypt");


app.use(bodyParser.urlencoded({entended: true}));
app.use(express.static(__dirname + "/static"));
app.use(session({ cookie: { maxAge: 60000 }, 
    secret: 'woot',
    resave: false, 
    saveUninitialized: false}));
    
app.use(flash());
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

mongoose.connect('mongodb://localhost/login', {useNewUrlParser: true});

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        validate:{
            validator: function(value){
                return /^[A-z]+$/.test(value)
            },
            message: "Please enter a valid first name"
        }
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        validate:{
            validator: function(value){
                return /^[A-z]+$/.test(value)
            },
            message: "Please enter a valid last name"
        }
    },
    email: {
        type: String, 
        required: [true, "Email field is required"],
        validate:{
            validator: function(value){
                return /@/.test(value)
            },
            message: "Please enter valid email address"
        }
    },
    birthday: {
        type: Date, 
        required: [true, "Birthday field is required"],
        validate:{
            validator: function(value){
                return value instanceof Date
            },
            message: "Please enter valid birthday"
        }
    },
    password: {
        type: String, 
        required: [true, "Your password is required"],
        validate:{
            validator: function(value){
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,120}/.test(value);
            },
            message: "Password must contain at least 1 number, Uppercase letter, and special character."
        }
    }

}, {timestamps: true});

const User = mongoose.model('User', UserSchema);

app.get("/", function(req, res){
    console.log("~Root~");
    res.render("index");
});

app.get("/success", function(req, res){
    console.log("~Success~");
    res.render("success");
});

app.post("/register", function(req, res){
    console.log("~Post~", req.body);
    User.create({firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, birthday: req.body.birthday, password: req.body.password }, function(err, user){
        if(err){
            console.log("Error please try again.", err);
            for(var key in err.errors){
                req.flash('regform', err.errors[key].message);
            }
            res.redirect("/");
        }else{

            console.log("~User successfully registered!~", err);
            res.redirect("/success");
            
        }
    })

});

app.post("/login", function(req, res){
    console.log("~Login~", req.body);
    User.findOne({email: req.body.email, password: req.body.password}, function(err, user){
        if(err){
            console.log("Error in logging in, try again.", err);
            for(var key in err.errors){
                req.flash('logform', err.errors[key].message);
            }
            res.redirect("/");
        }else{
            console.log("User successfully logged in!");
            res.redirect("/success");
        }
    })
})

app.listen(8000, () => console.log("listening on port 8000"));
