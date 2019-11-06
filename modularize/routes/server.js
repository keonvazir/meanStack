const express = require("express");
const app = express();
const session = require('express-session')
const mongoose = require('mongoose');
const moment = require('moment')
const bodyParser = require("body-parser");
const flash = require('express-flash');
// app.get('/', (req, res) => {
//    res.send("Hello Express");
// });

app.use(bodyParser.urlencoded({ entended: true }));
app.use(express.static(__dirname + "/static"));
app.use(session({
    cookie: { maxAge: 60000 },
    secret: 'woot',
    resave: false,
    saveUninitialized: false
}));

app.use(flash());
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

mongoose.connect('mongodb://localhost/dojos', { useNewUrlParser: true });


const QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    quote: { type: String, required: true, maxlength: 100 }
}, { timestamps: true });
// create an object to that contains methods for mongoose to interface with MongoDB
const Quote = mongoose.model('Quote', QuoteSchema);


require('./server/config/routes.js')(app)
// app.post('/quotes', (req, res)=>{
//     console.log(req.body);
//     const Quote = new Quote({name: req.body.name, quote: req.body.quote});
//     Quote.save()
//         .then(newQuoteData => console.log('Quote created: ', newQuoteData))
//         .catch(err => console.log(err));

//     res.redirect('/quotes');
// });

app.listen(8000, () => console.log("listening on port 8000"));
