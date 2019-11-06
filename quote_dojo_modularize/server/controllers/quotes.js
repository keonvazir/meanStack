const mongoose = require('mongoose');
const Quote = mongoose.model("Quote");

module.exports = {
    index: function(req, res){
        console.log("~Root~");
        res.render("index");
    },
    quotePage: function(req, res){
        console.log("~Get~");
        Quote.find()
        .then(data => res.render("quotes", { results: data }))
        .catch(err => res.json(err));
    },

    addQuote: function(req, res){
        console.log("~Post route~");
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
    },

}
