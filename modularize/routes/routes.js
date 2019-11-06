const mongoose = require('mongoose');
Quote = mongoose.model('Quote')
module.exports = function(app){
    app.get('/', function (req, res) {
       Quote.find({}, function (err, quotes){
        if (err) {
            console.log("You recevied an error!!!!");
        }
        else {
            res.render("index", { results: quotes });
        }
        
    })
})
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
        })
})
app.get('/quotes', (req, res) => {
    Quote.find()
        .then(data => res.render("quotes", { results: data }))
        .catch(err => res.json(err));
})

};        
