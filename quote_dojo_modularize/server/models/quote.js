const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    quote: { type: String, required: true, maxlength: 100 }
}, { timestamps: true });

// create an object to that contains methods for mongoose to interface with MongoDB
mongoose.model('Quote', QuoteSchema);
