const mongoose = require("mongoose");

const PeopleSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3}

}, {timestamps: true});

mongoose.model("People", PeopleSchema);
