const express = require("express");
const app = express();
const session = require('express-session')
const mongoose = require('mongoose');
const moment = require('moment')
const bodyParser = require("body-parser");

// app.get('/', (req, res) => {
//    res.send("Hello Express");
// });

app.use(bodyParser.urlencoded({entended: true}));
app.use(express.static(__dirname + "/static"));
app.use(session({ cookie: { maxAge: 60000 }, 
    secret: 'woot',
    resave: false, 
    saveUninitialized: false}));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

mongoose.connect('mongodb://localhost/dojos', {useNewUrlParser: true});
const QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    quote: {type: String, required: true, maxlength: 100}
   }, {timestamps: true});
   // create an object to that contains methods for mongoose to interface with MongoDB
   const Quote = mongoose.model('Quote', QuoteSchema);

const flash = require('express-flash');
    app.use(flash());
    app.post('/quotes', (req, res) => {
        const newQuote = new Quote(req.body);
        newQuote.save()
            .then(() => res.redirect('/quotes'))
            .catch(err => {
               console.log("We have an error!", err);
               // adjust the code below as needed to create a flash message with the tag and content you would like
               for (var key in err.errors) {
                   req.flash('registration', err.errors[key].message);
               }
               res.redirect('/');
           });
   });

app.get("/", function(req, res){
    Quote.find({}, function(err, quotes){
        if(err){
            console.log("You recevied an error!!!!");
        }
        else{
            res.render("index", {results: quotes});
        }
    });
    
})


// app.post('/quotes', (req, res)=>{
//     console.log(req.body);
//     const Quote = new Quote({name: req.body.name, quote: req.body.quote});
//     Quote.save()
//         .then(newQuoteData => console.log('Quote created: ', newQuoteData))
//         .catch(err => console.log(err));

//     res.redirect('/quotes');
// });

app.get('/quotes', (req, res) =>{
    Quote.find()
        .then(data => res.render("quotes", {results: data}))
        .catch(err => res.json(err));
});

app.listen(8000, () => console.log("listening on port 8000"));
