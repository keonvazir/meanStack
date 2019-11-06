const express = require("express");
const app = express();
const session = require('express-session')
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const flash = require('express-flash');
// mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({entended: true}));
app.use(express.static(__dirname + "/static"));
app.use(session({ cookie: { maxAge: 60000 }, 
    secret: 'woot',
    resave: false, 
    saveUninitialized: false}));
    
app.use(flash());
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

mongoose.connect('mongodb://localhost/messages', {useNewUrlParser: true});

   const CommentSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name must be longer than 3 characters"] ,minlength: 3},
    comment: {type: String, required: [true, "comment must be longer than 5 characters"]}
   }, {timestamps: true}) 

   const MessageSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name should be more than 3 characters"], minlength: 3},
    message: {type: String, required: [true, "Message needs to be longer than 5 characters and must be included"], minlength: 5},
    comments: [CommentSchema]
   }, {timestamps: true})
   // create an object to that contains methods for mongoose to interface with MongoDB
    const Comment = mongoose.model('Comment', CommentSchema);
    const Message = mongoose.model('Message', MessageSchema);

app.get("/", function(req, res){
    Message.find({}, function(err, messages){
        if(err){
            console.log("~Error matching the DB request~");
        }
        else{
            console.log("~Root~", messages);
            res.render("index", {posts: messages});
        }
    })
});
    
    app.post('/message', (req, res) => {
        const newMessage = new Message({name: req.body.name, message: req.body.message});
        newMessage.save(function(err){
            if(err){
                console.log("Errors in creating message, try again", err);
                for (var key in err.errors) {
                    req.flash('messageform', err.errors[key].message);
                }
                res.redirect('/');
                }
            else{
                console.log("~Successfully posted a message~");
                res.redirect("/");
            }
        })
});


app.post('/comment', function(req, res){
    // console.log("~Comment~", req.body);
    Comment.create({name: req.body.name, comment: req.body.comment}, function(err, comment){
        if(err){
            console.log("~Something went wrong please try again~", err);
            for(var key in err.errors){
                req.flash('commentform', err.errors[key].message);
            }
            res.redirect("/");
        } else{
            console.log("~Comment~", comment);
            Message.findOneAndUpdate({_id: req.body.msgId}, {$push: {comments: comment}}, function(err, data){
                if(err){
                    console.log("~Error please try again~", err);
                    res.redirect("/");
                }
                else{
                    console.log('updated message:', data);
                    res.redirect("/");
                }
            })
        }
    })
});

app.listen(8000, () => console.log("listening on port 8000"));
